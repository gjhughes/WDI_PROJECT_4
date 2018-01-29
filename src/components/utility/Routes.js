import React     from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../statics/Login';
// import Login from '../auth/Login';
import HomeRegister from '../statics/Register';

import GroupsIndex from '../groups/GroupsIndex';
import GroupsShow from '../groups/GroupsShow';
import GroupsNew from '../groups/GroupsNew';

import MomentsNew from '../moments/MomentsNew';
// import MomentsShow from '../moments/MomentsShow';
// import PredictionsNew from '../moments/PredictionsNew';

const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={HomeRegister} />
      <Route exact path="/groups/:id/moments/new" component={MomentsNew} />
      <Route exact path="/groups/new" component={GroupsNew} />
      <Route exact path="/groups/:id" component={GroupsShow} />
      <Route path="/groups" component={GroupsIndex} />
      {/* <Route exact path="/groups/:id/moments/:momentId" component={MomentsShow} />
      <Route  exact path="/groups/:id/moments/:momentId/bet" component={PredictionsNew} /> */}
    </Switch>
  );
};

export default Routes;
