import React from 'react';
import Axios from 'axios';

import MomentsForm from './MomentsForm.js';

class MomentsNew extends React.Component{
  state = {
    curentPrice: '',
    moments: [{
      endTime: '',
      lastBetTime: '',
      bets: {
        user: '',
        prediction: ''
      }
    }],
    newMoment: {
      endTime: '',
      lastBetTime: ''
    }
  }

  componentWillMount() {
    Axios
      .get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=CNY&apikey=XTWGBR0H1M1TYI7R')
      .then(res => {
        const prices  = Object.entries(res.data['Time Series (Digital Currency Intraday)']);
        const currentPrice = parseFloat(prices[0][1]['1b. price (USD)']);
        const roundedPrice = Math.round((currentPrice + 0.00001) * 100) / 100;
        this.setState({ currentPrice: roundedPrice });
      })
      .catch(err => console.log(err));
  }

  // componentWillMount() {
  //   Axios
  //     .get(`/api/groups/${this.props.match.params.id}`)
  //     .then(res => this.setState(res.data.moments))
  //     .catch(err => console.log(err));
  // }

  // handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   Axios
  //     .post(`/api/groups/${this.props.match.params.id}/moments`, this.state.moments)
  //     .then(res => this.setState({ moments: res.data.moments }))
  //     .catch(err => console.log(err));
  // }
  //
  // handleChange = ({ target: { name, value }}) => {
  //   const newMoment = Object.assign({}, this.state.newMoment, { [name]: value });
  //   const moments = this.state.moments.concat({ newMoment });
  //   console.log({newMoment});
  //   this.setState({ moments });
  // }


  render() {
    return(
      <div className='container'>
        <h1>{this.state.currentPrice}</h1>
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
