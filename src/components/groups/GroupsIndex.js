import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class GroupsIndex extends React.Component {
  state = {
    groups: [],
    members: []
  };

  componentWillMount() {
    Axios.get('/api/groups')
      .then(res => {
        this.setState({ groups: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="">
        <div className="section">
          <div className="columns is-centered">
            <div className="column is-10">
              <h1 className="heading sub-heading has-text-left">All Groups</h1>
              <div className="box wrapper-box">
                <div className="columns is-centered is-fluid">
                  {this.state.groups &&
                    this.state.groups.map(group => (
                      <div key={group.id} className="column is-half">
                        <Link to={`groups/${group.id}`}>
                          <div className="box group-box">
                            <small className="heading group-name">
                              {group.groupName}
                            </small>
                            <hr />
                            <div className="columns is-centered">
                              <div className="column is-10">Group Members</div>
                            </div>
                            <div className="columns">
                              {group.members.map(member => (
                                <div key={member.id} className="column is-4">
                                  <small>{member.user.fullName}</small>
                                </div>
                              ))}
                            </div>
                            <div className="">
                              <small>
                                Number of past frames in this group:{' '}
                                {group.moments.length}
                              </small>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupsIndex;
