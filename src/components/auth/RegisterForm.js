import React from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';

const RegisterForm = ({ handleSubmit, handleChange, user }) => {
  return(
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Row>
          <Input
            s={6}
            type="text"
            name="firstName"
            onChange={handleChange}
            value={user.firstName}
            label="First Name">
            <Icon>account_circle</Icon>
          </Input>
          <Input
            s={6}
            type="text"
            name="lastName"
            onChange={handleChange}
            value={user.lastName}
            label="Last Name">
            <Icon>account_circle</Icon>
          </Input>
        </Row>
        <Row>
          <Input
            s={12}
            type="text"
            name="email"
            onChange={handleChange}
            value={user.email}
            label="Email">
            <Icon>email</Icon>
          </Input>
        </Row>
        <Row>
          <Input
            s={6}
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            label="Password">
            <Icon>lock</Icon>
          </Input>
          <Input
            s={6}
            type="password"
            name="passwordConfirmation"
            onChange={handleChange}
            value={user.passwordConfirmation}
            label="Confirm Password">
            <Icon>lock</Icon>
          </Input>
        </Row>
        <Row>
          <Button>Register</Button>
        </Row>
      </form>
    </div>
  );
};

export default RegisterForm;
