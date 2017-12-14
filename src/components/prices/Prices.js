import React from 'react';
import Axios from 'axios';

class Price extends React.Component{
  state = {
    currentPrice: ''
  }

  componentDidMount() {
    Axios
      .get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=USD&apikey=XTWGBR0H1M1TYI7R')
      .then(res => {
        const prices  = Object.entries(res.data['Time Series (Digital Currency Intraday)']);
        const currentPrice = parseFloat(prices[0][1]['1b. price (USD)']);
        const roundedPrice = Math.round((currentPrice + 0.00001) * 100) / 100;
        this.setState({ currentPrice: roundedPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') });
      })
      .catch(err => console.log(err));
  }

  render() {

    return(
      <div>
        <h1>${this.state.currentPrice}</h1>
        <br /><p>BitCoin Price</p>
      </div>
    );
  }
}

export default Price;
