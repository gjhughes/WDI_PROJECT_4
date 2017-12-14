import React     from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../statics/Home';
import Login from '../auth/Login';
import Register from '../auth/Register';

import GroupsIndex from '../groups/GroupsIndex';
import GroupsShow from '../groups/GroupsShow';
import GroupsNew from '../groups/GroupsNew';

import MomentsNew from '../moments/MomentsNew';
import MomentsShow from '../moments/MomentsShow';
import PredictionsNew from '../moments/PredictionsNew';

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/groups/:id/moments/new" component={MomentsNew} />
      <Route exact path="/groups/:id/moments/:momentId" component={MomentsShow} />
      <Route  exact path="/groups/:id/moments/:momentId/bet" component={PredictionsNew} />
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/groups/new" component={GroupsNew} />
      <Route path="/groups/:id" component={GroupsShow} />
      <Route path="/groups" component={GroupsIndex} />
    </Switch>
  );
};

export default Routes;
