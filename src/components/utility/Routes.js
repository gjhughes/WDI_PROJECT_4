import React     from 'react';
import { Route } from 'react-router-dom';

import Login from '../auth/Login';
import UsersShow from '../users/UsersShow';
import AssetPieChart from '../charts/PieChart';

const Routes = () => {
  return(
    <div>
      <Route path="/login" component={Login} />
      <Route path="/users" component={AssetPieChart} />
      <Route path="/users/:id" component={UsersShow} />
    </div>

  );
};

export default Routes;
