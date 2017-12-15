import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Button } from 'reactbulma';

class GroupsIndex extends React.Component {
  state = {
    groups: [],
    members: []
  }

  componentWillMount() {
    Axios
      .get('/api/groups')
      .then(res => {
        this.setState({ groups: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className='container'>
        <h1 className="smallLogo">alpha<span className="bitcoin"><i className="fa fa-btc" aria-hidden="true"></i></span>et</h1>
        <br />
        <hr />
        <Box>
          <Link to={'/groups/new'}>
            <Button primary fullwidth className="newBtn">Create a New Group</Button>
          </Link>
        </Box>
        <hr />

        <div className="container">
          <div className="box">
            <div className="columns is-multiline is-fullwidth">
              {this.state.groups.map(group =>
                <div className="column is-half has-text-centered" key={group.id}>
                  <div className="box inner-box" key={group.id}>
                    <h1 className="has-text-centered">{group.groupName}</h1>
                    <small className="has-text-centered">Created by: {group.createdBy.firstName}{' '}{group.createdBy.lastName}</small>
                    <hr />
                    <div className="level">
                      {group.members.map(member =>
                        <div key={member.id}>
                          <div className="level-item has-text-centered">
                            <div >
                              <small>{member.user.firstName}</small>
                            </div>
                          </div>
                          <div className="level-item has-text-centered">
                            <div >
                              <small>{member.user.lastName}</small>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <Link to={`groups/${group.id}`}>
                      <Button primary fullwidth className="show-btn">Show Group</Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

    );
  }
}

export default GroupsIndex;
