import React from 'react';
import Axios from 'axios';

import GroupsForm from './GroupsForm';
import Auth from '../../lib/Auth';

class GroupsNew extends React.Component{
  state = {
    group: {
      createdBy: {},
      groupName: '',
      image: '',
      members: [],
      moments: []
    }
  }

  handleChange = ({ target: { name, value }}) => {
    const userId = Auth.getPayload();
    const group = Object.assign({}, this.state.group, { [name]: value }, { createdBy: userId.userId }, );
    this.setState({ group });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/groups', this.state.group, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push('/groups'))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <GroupsForm
        group={this.state.group}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

export default GroupsNew;
