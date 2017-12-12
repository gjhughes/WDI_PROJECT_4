
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

  // componentWillMount() {
  //   Axios
  //     .get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=CNY&apikey=XTWGBR0H1M1TYI7R')
  //     .then(res => {
  //       const prices  = Object.entries(res.data['Time Series (Digital Currency Intraday)']);
  //       const currentPrice = parseFloat(prices[0][1]['1b. price (USD)']);
  //       const roundedPrice = Math.round((currentPrice + 0.00001) * 100) / 100;
  //       this.setState({ currentPrice: roundedPrice });
  //     })
  //     .catch(err => console.log(err));
  // }

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
    this.setState({ newMoment });
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
