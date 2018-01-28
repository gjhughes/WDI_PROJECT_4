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
    <div>
      <ul className='menu-list'>
        { !Auth.isAuthenticated() &&
        <li>
          <Link to="/" className="">
            <i className="fa fa-sign-in"></i><br />
            <p>Sign In</p>
          </Link>
        </li>
        }
        { !Auth.isAuthenticated() &&
        <li>
          <Link to="/register" className="">
            <i className="fa fa-user-plus"></i><br />
            <p>Register</p>
          </Link>
        </li>
        }

        { Auth.isAuthenticated() &&
        <li>
          <Link to="/groups/new">
            <i className="fa fa-plus"></i><br />
            <p>Create Group</p>
          </Link>
        </li>
        }
        { Auth.isAuthenticated() &&
        <li>
          <Link to="/groups">
            <i className="fa fa-group"></i><br />
            <p>My Groups</p>
          </Link>
        </li>
        }
        { Auth.isAuthenticated() &&
        <li>
          <Link to="/" onClick={logout}>
            <i className="fa fa-power-off"></i><br />
            <p>Logout</p>
          </Link>
        </li>
        }
      </ul>
    </div>
  );
};

export default withRouter(Sidebar);
