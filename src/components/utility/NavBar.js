// import React                from 'react';
// import { withRouter } from 'react-router-dom';
// import { Nav, Button } from 'reactbulma';
//
// import Auth from '../../lib/Auth';
//
// const NavBar = ({ history }) => {
//
//   function logout(e) {
//     e.preventDefault();
//
//     Auth.removeToken();
//     history.push('/');
//   }
//
//   return(
//     <Nav className="mainNav" right>
//       { !Auth.isAuthenticated() &&
//         <Nav.Right className="navItem" href="/register">Register</Nav.Right>}
//       {' '}
//       { !Auth.isAuthenticated() &&
//         <Nav.Right className="navItem" href="/login">
//           <Button className="loginButton">Login</Button>
//         </Nav.Right>}
//       {' '}
//       { Auth.isAuthenticated() && <Nav.Right href="/groups" className="navItem">Groups</Nav.Right>}
//       { Auth.isAuthenticated() && <Nav.Right href="#" className="navItem" onClick={logout}>Logout</Nav.Right>}
//     </Nav>
//   );
// };
//
// export default withRouter(NavBar);
