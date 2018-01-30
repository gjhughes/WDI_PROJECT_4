import React from 'react';

const LoginForm = ({ handleSubmit, handleChange, user }) => {
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
        </div>
      </div>
    </div>

  );
};

export default LoginForm;
