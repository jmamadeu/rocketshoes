import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from '../pages/Home';
import Cart from '../pages/Cart';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Main} path='/' exact />
      <Route component={Cart} path='/cart' />
    </Switch>
  );
};

export default Routes;
