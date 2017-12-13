import React from 'react';
import Axios from 'axios';

import GroupsForm from './GroupsForm';
import Auth from '../../lib/Auth';

class GroupsNew extends React.Component{
  state = {
    users: [],
    group: {
      createdBy: {},
      groupName: '',
      image: '',
      members: [],
      moments: []
    }
  }

  componentWillMount() {
    Axios
      .get('/api/users')
      .then(res => {
        const currentUser = res.data.find(user => user.id === Auth.getPayload().userId);
        const members = [currentUser];
        const group = Object.assign({}, this.state.group, { createdBy: currentUser, members });
        const otherUsers = res.data.filter(user => user.id !== Auth.getPayload().userId);
        this.setState({ users: otherUsers, group });
      })
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value }}) => {
    const group = Object.assign({}, this.state.group, { [name]: value });
    this.setState({ group });
  }

  handleSelectChange = (e) => {
    const selectedUserId = e.target.options[e.target.options.selectedIndex].getAttribute('data-value');
    const selectedName = e.target.value.split(' ');
    const selectedUser = { id: selectedUserId, firstName: selectedName[0], lastName: selectedName[1]};
    const members = this.state.group.members.concat([selectedUser]);
    const group = Object.assign({}, this.state.group, { members });
    this.setState({ group });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // const userId = Auth.getPayload();
    const group = Object.assign({}, this.state.group, {
      members: this.state.group.members.map(member => member.id)
    });

    console.log(group);

    this.setState({group}, () => {
      Axios
        .post('/api/groups', this.state.group, {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
        .then(() => this.props.history.push('/groups'))
        .catch(err => console.log(err));
    });
  }

  render() {
    return(
      <GroupsForm
        users={this.state.users}
        group={this.state.group}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleSelectChange={this.handleSelectChange}
      />
    );
  }
}

export default GroupsNew;
