import React    from 'react';
import Axios    from 'axios';
// import { Link } from 'react-router-dom';

class UsersShow extends React.Component {
  state = {
    user: {},
    plans: []
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({
        user: res.data
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.user.firstName}</h1>
      </div>
    );
  }
}

export default UsersShow;
