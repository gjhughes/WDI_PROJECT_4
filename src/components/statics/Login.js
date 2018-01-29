import React from 'react';

import Login from '../auth/Login';
import Logo from '../utility/Logo';

const Home = () => {
  return(
    <div className="login-wrapper">
      <Logo />
      <Login />
    </div>
  );
};

export default Home;
