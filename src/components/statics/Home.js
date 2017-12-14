import React from 'react';
import { Icon } from 'react-fa';

import Login from '../auth/Login';

const Home = () => {
  return(
    <div>
      <div className='headingContainer'>
        <h1 className="logo">alpha<span className="bitcoin"><i className="fa fa-btc" aria-hidden="true"></i></span>et</h1>
      </div>
      <div className='loginContainer'>
        <Login />
      </div>
    </div>

  );
};

export default Home;
