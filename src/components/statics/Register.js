import React from 'react';

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

export default HomeRegister;
