import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Home from './components/pages/Home';
import ToDo from './components/pages/ToDo';

const Foo = () => (<div>Foo!</div>);
const Bar = () => (<div>Bar!</div>);


export default (store) => {
  function requireLogin(nextState, replaceState, callback) {
    function checkAuth() {
      // If user does not exist in store, return to home page
      if (!store.getState().user) {
        replaceState(null, '/');
      }
      callback();
    }

    checkAuth();
  }


  return (
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      <Route path='foo' component={Foo}/>
      <Route onEnter={requireLogin}>
        <Route path='bar' component={Bar}/>
      </Route>
    </Route>
  );
};


// const routes = (
//   <Route path='/' component={App}>
//     <IndexRoute component={Home}/>
//     <Route path='todo' component={ToDo}/>
//     <Route path='foo' component={Foo}/>
//     <Route path='bar' component={Bar}/>
//   </Route>
// );

// export default routes;
