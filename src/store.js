import _ from 'lodash';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {logger} from './middleware';

export default (history, initialState) => {
  const reducer = combineReducers(_.merge({
    routing: routerReducer
  }, reducers));

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        routerMiddleware(history),
        thunk,
        logger
      )
    )
  );

  return store;
};
