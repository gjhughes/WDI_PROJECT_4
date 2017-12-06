import React from 'react';

const LoginForm = ({ handleSubmit, handleChange, user }) => {
  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        value={user.email}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        value={user.password}
      />
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
