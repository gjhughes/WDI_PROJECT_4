import React     from 'react';
import { Route } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';
import UsersShow from '../users/UsersShow';

import TransactionsIndex from '../transactions/TransactionsIndex';

const Routes = () => {
  return(
    <div>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/users/:id" component={UsersShow} />
      <Route path="/transactions" component={TransactionsIndex} />
    </div>

  );
};

export default Routes;
