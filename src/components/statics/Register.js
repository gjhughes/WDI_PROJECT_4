import React from 'react';
import { withRouter } from 'react-router-dom';

import Register from '../auth/Register';
import Logo from '../utility/Logo';

const HomeRegister = () => {
  return(
    <div className="login-register">
      <Logo />
      <Register />
    </div>
  );
};

export default withRouter(HomeRegister);
