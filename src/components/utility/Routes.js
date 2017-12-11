import React     from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../auth/Login';
import Register from '../auth/Register';

import GroupsIndex from '../groups/GroupsIndex';
import GroupsShow from '../groups/GroupsShow';
import GroupsNew from '../groups/GroupsNew';

import MomentsNew from '../moments/MomentsNew';
import MomentsShow from '../moments/MomentsShow';

const Routes = () => {
  return(
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/groups/:id/moments/new" component={MomentsNew} />
      <Route path="/groups/:id/moments/:id" component={MomentsShow} />
      <Route path="/groups/new" component={GroupsNew} />
      <Route path="/groups/:id" component={GroupsShow} />
      <Route path="/groups" component={GroupsIndex} />
    </Switch>
  );
};

export default Routes;
