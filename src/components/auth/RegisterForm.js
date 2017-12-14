import React from 'react';
import { Box, Field, Input, Button } from 'reactbulma';

const RegisterForm = ({ handleSubmit, handleChange, user }) => {
  return(
    <div className="container">
      <h1>Register</h1>

      <Box>
        <form onSubmit={handleSubmit}>
          <Field>
            <label className="label">First Name</label>
            <Input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={user.firstName}>
            </Input>
            <label className="label">Last Name</label>
            <Input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={user.lastName}>
            </Input>
            <label className="label">Email</label>
            <Input
              s={12}
              type="text"
              name="email"
              onChange={handleChange}
              value={user.email}>
            </Input>
            <label className="label">Password</label>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={user.password}>
            </Input>
            <label className="label">Confirm Password</label>
            <Input
              type="password"
              name="passwordConfirmation"
              onChange={handleChange}
              value={user.passwordConfirmation}>
            </Input>
            <div className='container'>
              <br />
              <Button primary>Register</Button>
            </div>
          </Field>
        </form>
      </Box>
    </div>
  );
};

export default RegisterForm;
