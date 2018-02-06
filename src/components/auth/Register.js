import React        from 'react';
import Axios        from 'axios';
import { withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';
import RegisterForm from './RegisterForm';

class Register extends React.Component {
  state = {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  }

  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/groups');
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    return (
      <RegisterForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }

}

export default withRouter(Register);
