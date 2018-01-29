import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class GroupsIndex extends React.Component {
  state = {
    groups: []
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
      <div className="">
        <div className='section'>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <h1 className="heading sub-heading has-text-left">All Groups</h1>
              <div className="box wrapper-box">
                <div className='columns is-centered'>
                  { this.state.groups.map(group =>
                    <div key={group.id} className='column is-6'>
                      <Link to={`groups/${group.id}`}>
                        <div className="box group-box">
                          <small>{ group.groupName }</small>
                          <div className='level is-mobile'>
                            <div className='level-item has-text-centered'>
                              <div>
                                <p className="heading">1st</p>
                                <p className="">Name</p>
                              </div>
                            </div>
                            <div className='level-item has-text-centered'>
                              <div>
                                <p className='heading'>2nd</p>
                                <p className=''>Name</p>
                              </div>
                            </div>
                            <div className='level-item has-text-centered'>
                              <div>
                                <p className='heading'>3rd</p>
                                <p className=''>Name</p>
                              </div>
                            </div>
                          </div>

                          <div className=''>
                            <small>Number of past frames in this group: { group.moments.length }</small>
                          </div>
                        </div>
                      </Link>
                    </div>
                  )}
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
