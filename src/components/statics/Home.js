import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

const Home = () => {
  return(
    <div className='container'>
      <Link to="/login">
        <Button waves="light">Login</Button>
      </Link>
      <Link to="/register">
        <Button waves="light" className="loginButton">Register</Button>
      </Link>
    </div>
  );
};

export default Home;
