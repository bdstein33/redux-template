import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/shared/App';
import Home from './components/pages/Home';
import ToDo from './components/pages/ToDo';

const Foo = () => (<div>Foo!</div>);
const Bar = () => (<div>Bar!</div>);

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Home}/>
    <Route path='todo' component={ToDo}/>
    <Route path='foo' component={Foo}/>
    <Route path='bar' component={Bar}/>
  </Route>
);

export default routes;
