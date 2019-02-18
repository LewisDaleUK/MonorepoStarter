import { connectRouter } from 'connected-react-router/seamless-immutable';
import { merge } from 'ramda';
import { combineReducers } from 'redux-seamless-immutable';
import * as connectedReactRouter from 'connected-react-router';

console.log(connectedReactRouter);

export const createReducer = (configs, history) => combineReducers(
  merge(
    configs
      .map(config => config.reducer)
      .reduce((acc, next) => merge(acc, next), {}),
    { router: connectRouter(history) },
  ),
);
