import React from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';

const LoginForm = ({ handleSubmit, handleChange, user }) => {
  return(
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Row>
          <Input
            s={12}
            type="text"
            name="email"
            onChange={handleChange}
            value={user.email}
            label="Email">
            <Icon>mail_outline</Icon>
          </Input>
        </Row>
        <Row>
          <Input
            s={12}
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            label="Password">
            <Icon>lock_outline</Icon>
          </Input>
        </Row>
        <Row>
          <Button>Login</Button>
        </Row>
      </form>
    </div>
  );
};

export default LoginForm;
