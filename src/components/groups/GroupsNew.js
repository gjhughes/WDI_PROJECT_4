import React from 'react';
import Axios from 'axios';

import GroupsForm from './GroupsForm';
import Auth from '../../lib/Auth';

class GroupsNew extends React.Component{
  state = {
    currentUser: {},
    selectUsers: [
      { label: '', value: ' ' }
    ],
    users: [],
    group: {
      createdBy: {},
      groupName: '',
      image: '',
      members: {
        user: '',
        score: ''
      },
      moments: []
    }
  }

  componentDidMount() {
    Axios
      .get('/api/users')
      .then(res => {
        const currentUser = res.data.find(user => user.id === Auth.getPayload().userId);
        const groupMembers = [currentUser];
        const allUsers = res.data.filter(user => user.id !== Auth.getPayload().userId);
        this.setState({ currentUser: currentUser, users: allUsers, groupMembers });
        this.state.users.map(user =>  
          this.setState({ selectUsers: [{ label: user.fullName, value: user }]}));
      })
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value }}) => {
    const group = Object.assign({}, this.state.group, { [name]: value });
    this.setState({ group });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const group = Object.assign({}, this.state.group, {
      members: this.state.group.members.map(member => member.id)
    });

    this.setState({group}, () => {
      Axios
        .post('/api/groups', this.state.group, {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
        })
        .then(() => this.props.history.push('/groups'))
        .catch(err => console.log(err));
    });
  }

  handleMultiSelect = (e) => {
    const selectedUserId = e.target.value;
    console.log(selectedUserId);
  }


  // handleSelectChange = (e) => {
  //   const selectedUserId = e.target.options[e.target.options.selectedIndex].getAttribute('data-value');
  //   const selectedName = e.target.value.split(' ');
  //   const selectedUser = { id: selectedUserId, firstName: selectedName[0], lastName: selectedName[1]};
  //   const members = this.state.group.members.concat([selectedUser]);
  //   const group = Object.assign({}, this.state.group, { members });
  //   this.setState({ group });
  // }

  render() {
    console.log(this.state.selectUsers);
    return(
      <GroupsForm
        options={this.state.selectUsers}
        currentUser={this.state.currentUser}
        users={this.state.users}
        group={this.state.group}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        handleMultiSelect={this.handleMultiSelect}
      />
    );
  }
}

export default GroupsNew;
