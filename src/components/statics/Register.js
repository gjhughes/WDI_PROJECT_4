import React from 'react';

import Register from '../auth/Register';

const HomeRegister = () => {
  return(
    <div className="login-register">
      {/* <div className="logo-wrapper is-centered">
        <h1>alpha<span className="bitcoin"><i className="fa fa-btc"></i></span>et</h1>
      </div> */}
      <Register />
    </div>
  );
};

export default HomeRegister;
