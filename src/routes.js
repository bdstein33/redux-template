import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Index from './components/pages/Index';
import Faq from './components/pages/Faq';
import Faqs from './components/pages/Faqs';
import Test from './components/pages/Test';

import faqActions from './actions/faq';

export default (store) => {
  function requireLogin(nextState, replaceState, callback) {
    function checkAuth() {
      // If user does not exist in store, return to index page
      if (!store.getState().application.user) {
        replaceState(null, '/');
      }
      return callback();
    }
    console.log('CHECKING AUTH');
    return checkAuth();
  }

  function getFaqs(nextState, replaceState, callback) {
    console.log('GET FAQS');
    return faqActions.getUserFaqs({id: store.getState().application.user.id})(store.dispatch)
      .then(() => {
        callback();
      });
  }

  function getFaq(nextState, replaceState, callback) {
    return faqActions.getFaq({id: nextState.params.id, userId: store.getState().application.user.id})(store.dispatch)
      .then(() => {
        callback();
      });
  }

  return (
    <Route path='/' component={App}>
      <IndexRoute component={Index}/>
      <Route onEnter={requireLogin}>
        <Route path='/faqs' component={Faqs} onEnter={getFaqs} />
        <Route path='/faqs/:id' component={Faq} onEnter={getFaq} />
      </Route>
      <Route path='/test' component={Test}/>
    </Route>
  );
};
