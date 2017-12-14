import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Field, Control, Input, Button } from 'reactbulma';

const LoginForm = ({ handleSubmit, handleChange, user }) => {
  return(
    <div>
      <Box className="loginBox">
        <br />
        <h1>Log in to your account</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <Field>
            <Control>
              <Input
                medium
                placeholder="Email address"
                onChange={handleChange}
                value={user.email}
                type="text"
                name="email"
              />
            </Control>
            <br />
            <Control>
              <Input
                medium
                placeholder="Password"
                onChange={handleChange}
                value={user.password}
                type="password"
                name="password"
              />
            </Control>
            <br />
            <Button medium primary fullwidth>Login</Button>
          </Field>
        </form>
        <hr />
        <h3>New to alpha<i className="fa fa-btc" aria-hidden="true"></i>et? <Link to="/register" className="register">Sign Up</Link></h3>
      </Box>
    </div>
  );
};

export default LoginForm;
