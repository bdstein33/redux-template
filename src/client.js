import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, match, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store';
import getRoutes from './routes';

const initialState = window.__data;
const store = configureStore(browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store);

// localStorage.debug = '*';
match({history, routes: getRoutes(store)}, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps}/>
    </Provider>,
    document.getElementById('app')
  );
});
