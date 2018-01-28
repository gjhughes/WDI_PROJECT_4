import React from 'react';
import Axios from 'axios';

import MomentsForm from './MomentsForm.js';

class MomentsNew extends React.Component{
  state = {
    curentPrice: '',
    newMoment: {
      endTime: '',
      lastBetTime: ''
    }
  }
 
  componentWillMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post(`/api/groups/${this.props.match.params.id}/moments`, this.state.newMoment)
      .then(() => this.props.history.push(`/groups/${this.props.match.params.id}`))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value }}) => {
    const newMoment = Object.assign({}, this.state.newMoment, { [name]: value });
    this.setState({ newMoment }, () => console.log(this.state));
  }

  render() {
    return(
      <div className='container'>
        <MomentsForm
          newMoment={this.state.newMoment}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default MomentsNew;
