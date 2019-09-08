import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Work from '../pages/work';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/work" component={Work} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
