import { ConnectedRouter } from 'connected-react-router'
import * as React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

export const createRouter = (configs, history) => {
  const routes = configs
    .filter(({route}) => route !== undefined)
    .map(({route}) => (
      <Route
        component={route.component}
        exact={route.exact || false}
        key={route.path}
        path={route.path}
      />
    ));
  console.log(history);
  return () => (
    <ConnectedRouter history={history}>
        <Switch>
          {routes}
        </Switch>
    </ConnectedRouter>
  );
};

