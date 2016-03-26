import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import configureStore from './store';
import routes from './routes';

const initialState = window.__data;
const store = configureStore(browserHistory, initialState);
const history = syncHistoryWithStore(browserHistory, store);

localStorage.debug = '*';

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
