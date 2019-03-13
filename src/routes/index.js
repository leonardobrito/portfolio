import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import Home from '../pages/home';
import Work from '../pages/work';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/work" component={Work} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
