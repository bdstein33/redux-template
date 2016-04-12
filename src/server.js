import Debug from 'debug';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.dev.config.js';

// Server Configuration
import express from 'express';
import bodyParser from 'body-parser';
// import db from '../db';
// import morgan from 'morgan';

// React/Redux Requirements
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import React from 'react';
import {Provider} from 'react-redux';
import Html from './components/Html';
// Routing
import {createMemoryHistory, match, RouterContext} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store';
import getRoutes from './routes';

const debug = Debug('server'),
  server = express(),
  port = process.env.PORT || 3000;

/******************************
EXPRESS CONFIGURATION
******************************/
server.use('/public', express.static(path.join(__dirname, '../build')));
server.use(bodyParser.json());

/******************************
API ROUTES
******************************/
server.use('/api/auth', require('../api/endpoints/auth'));

/******************************
HOT MODULE RELOADING
******************************/
if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(webpackConfig);

  server.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    quiet: false,
    publicPath: webpackConfig.output.publicPath
  }));

  server.use(require('webpack-hot-middleware')(compiler));
}

/******************************
ISOMORPHIC RENDERING
******************************/
server.use((req, res) => {
  const memoryHistory = createMemoryHistory(req.url);
  const store = configureStore(memoryHistory);
  const history = syncHistoryWithStore(memoryHistory, store);

  match({history, routes: getRoutes(store), location: req.url}, (error, redirectLocation, renderProps) => {
    if (error) {
      res.status(500).send(error.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // Render markup to string
      const markup = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps}/>
        </Provider>
      );

      // Convert markup string into html
      const html = renderToStaticMarkup(React.createElement(Html, {
        store,
        markup
      }));

      res.send(html);
    }
  });
});

server.listen(port, () => {
  debug(`Listening on port ${port}`);
});

export default server;
