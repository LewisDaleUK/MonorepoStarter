import { createStore as reduxCreateStore } from 'redux';
import { default as createSagaMiddleware } from 'redux-saga'

import { createMiddleware } from '../createMiddleware';
import { createReducer } from '../createReducer';
import { createSagas } from '../createSagas';

export const createStore = (configs, history) => {
  const sagaMiddleware = createSagaMiddleware();
  const sagas = createSagas(configs);
  const store = reduxCreateStore(
    createReducer(configs, history),
    createMiddleware(history, sagaMiddleware),
  );
  sagas.map(saga => sagaMiddleware.run(saga));
  return store;
}
