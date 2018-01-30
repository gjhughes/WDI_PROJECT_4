import React from 'react';
import Axios from 'axios';

import Auth from '../../lib/Auth';
import PredictionsForm from './PredictionsForm';

class PredictionsNew extends React.Component{
  state = {
    moment: {},
    newBet: {
      user: '',
      prediction: ''
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}`)
      .then(res => this.setState({ moment: res.data }))
      .catch(err => console.log(err));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}/bets`, this.state.newBet, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push(`/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}`))
      .catch(err => console.log(err));  
  }

  handleChange = ({ target: { name, value }}) => {
    if (Auth.getPayload()) {
      const { userId } = Auth.getPayload();
      const newBet = Object.assign({}, this.state.newBet, { user: userId, [name]: value });
      this.setState({ newBet });
      console.log(newBet);
    }
  }

  render() {
    return(
      <PredictionsForm
        newBet={this.state.newBet}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />

    );
  }
}

export default PredictionsNew;
