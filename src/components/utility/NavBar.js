import React                from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, NavItem , Button } from 'react-materialize';

import Auth from '../../lib/Auth';

const NavBar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.removeToken();
    history.push('/');
  }

  return(
    <Navbar className="mainNav" right>
      { !Auth.isAuthenticated() &&
        <NavItem className="navItem" href="/register">Register</NavItem>}
      {' '}
      { !Auth.isAuthenticated() &&
        <NavItem className="navItem" href="/login">
          <Button waves="light" className="loginButton">Login</Button>
        </NavItem>}
      {' '}
      { Auth.isAuthenticated() && <NavItem href="#" className="navItem" onClick={logout}>Logout</NavItem>}
    </Navbar>
  );
};

export default withRouter(NavBar);
