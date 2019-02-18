import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRouter } from '../createRouter';
import { createRouterHistory } from '../createRouterHistory';
import { createStore } from '../createStore';

export const createApp = (configs) => {
  const history = createRouterHistory();
  const store = createStore(configs, history);
  const Router = createRouter(configs, history);
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(
    (<Provider store={store}>
        <Router />
      </Provider>),
    div,
  );
};
