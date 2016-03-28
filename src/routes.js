import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Container from './components/shared/Container';
import Home from './components/pages/Home';
import ToDo from './components/pages/ToDo';

const Foo = () => (<div>Foo!</div>);
const Bar = () => (<div>Bar!</div>);

const routes = (
  <Route path='/' component={Container}>
    <IndexRoute component={Home}/>
    <Route path='todo' component={ToDo}/>
    <Route path='foo' component={Foo}/>
    <Route path='bar' component={Bar}/>
  </Route>
);

export default routes;
