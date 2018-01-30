import React                from 'react';
import { withRouter, Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Sidebar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.removeToken();
    history.push('/');
  }

  return(
    <div className="">
      <ul className='menu-list'>
        { Auth.isAuthenticated() &&
          <div className='sidebar-logo'>
            <li>alpha<span><i className="fa fa-btc"></i></span>et</li>
          </div>
        }
        { !Auth.isAuthenticated() &&
          <div className='sidebar-out'>
            <li>
              <Link to="/" className="">
                <i className="fa fa-sign-in"></i><br />
                <p>Sign In</p>
              </Link>
            </li>
            <li>
              <Link to="/register" className="">
                <i className="fa fa-user-plus"></i><br />
                <p>Register</p>
              </Link>
            </li>
          </div>
        }
        { Auth.isAuthenticated() &&
          <div className='sidebar-in'>
            <li>
              <Link to="/groups/new">
                <i className="fa fa-plus"></i><br />
                <p>New Group</p>
              </Link>
            </li>
            <li>
              <Link to="/groups">
                <i className="fa fa-group"></i><br />
                <p>All Groups</p>
              </Link>
            </li>
          </div>
        }
        { Auth.isAuthenticated() &&
          <div className='sidebar-logout is-centered'>
            <li className>
              <Link to="/" onClick={logout}>
                <i className="fa fa-power-off"></i><br />
                <p>Logout</p>
              </Link>
            </li>
          </div>
        }
      </ul>
    </div>
  );
};

export default withRouter(Sidebar);
