import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm2 = ({ handleSubmit, handleChange, user }) => {
  return(
    <div className="section login-section">
      <div className='columns is-centered'>
        <div className="box login-box has-text-centered column is-8">
          <br />
          <h1>Log in to your account</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className='field'>
              <div className="control has-icons-left">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Email address"
                  onChange={handleChange}
                  value={user.email}
                  name="email"
                />
                <span className="icon is-medium is-left">
                  <i className="fa fa-user-circle-o"></i>
                </span>
              </div>
              <br />
              <div className="control has-icons-left">
                <input
                  className="input is-medium"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={user.password}
                  name="password"
                />
                <span className="icon is-medium is-left">
                  <i className="fa fa-lock"></i>
                </span>
              </div>
              <br />
              <div className="control">
                <button className="button is-primary is-fullwidth is-medium">Login</button>
              </div>
            </div>
          </form>
          <hr />
          <h3>New to alpha<i className="fa fa-btc" aria-hidden="true"></i>et? <Link to="/register" className="register">Sign Up</Link></h3>
        </div>
      </div>
    </div>

  );
};

export default LoginForm2;
