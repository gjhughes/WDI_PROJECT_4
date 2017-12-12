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
      .then(res => {
        console.log('moment', res.data);
        this.setState({ moment: res.data });
      })
      .catch(err => console.log(err));
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}/bets`, this.state.newBet, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}` }
      })
      .then(() => this.props.history.push(`/groups/${this.props.match.params.id}`))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value }}) => {
    const newBet = Object.assign({}, this.state.newBet, { [name]: value });
    this.setState({ newBet });
    console.log(newBet);
  }

  render() {
    return(
      <dvi className='container'>
        <div className='container'>
          <h1>{this.state.moment.endTime}</h1>
          <p>Moment Show</p>
        </div>
        <div className='container'>
          <PredictionsForm
            newBet={this.state.newBet}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        </div>
      </dvi>
    );
  }
}

export default PredictionsNew;
