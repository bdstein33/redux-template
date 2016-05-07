import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Index from './components/pages/Index';
import Faqs from './components/pages/Faqs';

export default (store) => {
  function requireLogin(nextState, replaceState, callback) {
    function checkAuth() {
      // If user does not exist in store, return to index page
      if (!store.getState().application.user) {
        replaceState(null, '/');
      }
      callback();
    }
    checkAuth();
  }


  return (
    <Route path='/' component={App}>
      <IndexRoute component={Index}/>
      <Route onEnter={requireLogin}>
        <Route path='faqs' component={Faqs}/>
      </Route>
    </Route>
  );
};
