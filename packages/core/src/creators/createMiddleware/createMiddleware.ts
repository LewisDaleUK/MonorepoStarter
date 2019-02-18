import { routerMiddleware } from 'connected-react-router'
import { applyMiddleware, compose } from 'redux';
import { initialiseReduxDevtools } from '../initialiseReduxDevtools';

export const createMiddleware = (history, sagaMiddleware) => compose(
  applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware,
  ),
  initialiseReduxDevtools(),
);
