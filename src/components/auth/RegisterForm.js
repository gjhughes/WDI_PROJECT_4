import React from 'react';

const RegisterForm = ({ handleSubmit, handleChange, user }) => {
  return(
    <div className='section'>
      <div className='columns is-centered'>
        <div className='column is-8 box register-box'>
          <br />
          <h1>Register</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <div className='field'>
              <div className='field-body'>
                <div className='field is-horizontal'>
                  <p className='control has-icons-left'>
                    <input
                      className="input is-medium"
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      value={user.firstName}
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-user-circle-o"></i>
                    </span>
                  </p>
                </div>
                <div className='field is-horizontal'>
                  <p className='control has-icons-left'>
                    <input
                      className="input is-medium"
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      onChange={handleChange}
                      value={user.lastName}
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-user-circle-o"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className='field'>
              <p className='control has-icons-left'>
                <input
                  className='input is-medium'
                  placeholder="Email Address"
                  type='text'
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                />
                <span className="icon is-medium is-left">
                  <i className="fa fa-envelope-o"></i>
                </span>
              </p>
            </div>
            <div className='field'>
              <div className='field-body'>
                <div className='field is-horizontal'>
                  <p className='control has-icons-left'>
                    <input
                      className="input is-medium"
                      placeholder="Enter Password"
                      type="password"
                      name="password"
                      onChange={handleChange}
                      value={user.password}
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div className='field is-horizontal'>
                  <p className='control has-icons-left'>
                    <input
                      className="input is-medium"
                      placeholder="Confirm Password"
                      type="password"
                      name="passwordConfirmation"
                      onChange={handleChange}
                      value={user.passwordConfirmation}
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-lock"></i>
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <br />
            <div className="control">
              <button className="button is-primary is-fullwidth is-medium">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
