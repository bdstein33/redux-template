import Debug from 'debug';
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../webpack.dev.config.js';

// Server Configuration
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import redis from 'connect-redis';
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

const debug = Debug('Server'),
  server = express(),
  port = process.env.PORT || 3000,
  RedisStore = redis(session);;

/******************************
WEBPACK AND HMR
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
EXPRESS CONFIGURATION
******************************/
// Static files
server.use('/public', express.static(path.join(__dirname, '../build')));

// Request parsing
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));

// Session
server.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false, // don't resave session to store if it wasn't modified
  store: new RedisStore({
    host: process.env.REDIS_SERVER,
    port: process.env.REDIS_PORT
  }),
  rolling: true, // reset expiration to original maxAge on each request
  cookie: {
    maxAge: parseInt(process.env.SESSION_AGE, 10)
  },
  saveUninitialized: true
}));


/******************************
API ROUTES
******************************/
server.use('/api/auth', require('../api/endpoints/auth'));
server.use('/api/session', require('../api/endpoints/session'));
server.use('/api/faqs', require('../api/endpoints/faqs'));
server.use('/api/iframe', require('../api/endpoints/iframe'));

/******************************
ISOMORPHIC RENDERING
******************************/
server.use((req, res) => {
  // If user exists on session (is logged in), pass user data to client
  const initialState = {
    application: {
      user: req.session.user
    }
  };

  const memoryHistory = createMemoryHistory(req.url);
  const store = configureStore(memoryHistory, initialState);
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
