import React from 'react';

import Login from '../auth/Login';

const Home = () => {
  return(
    <div className="login-wrapper">
      {/* <div className="logo-wrapper is-centered">
        <h1>alpha<span className="bitcoin"><i className="fa fa-btc"></i></span>et</h1>
      </div> */}
      <Login />
    </div>
  );
};

export default Home;
