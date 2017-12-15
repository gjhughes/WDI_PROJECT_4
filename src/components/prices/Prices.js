import React from 'react';
import Axios from 'axios';
import Spinner from 'react-spinkit';

class Price extends React.Component{
  state = {
    currentPrice: '',
    isLoaded: false
  }

  componentDidMount() {
    Axios
      .get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=USD&apikey=XTWGBR0H1M1TYI7R')
      .then(res => {
        const prices  = Object.entries(res.data['Time Series (Digital Currency Intraday)']);
        const currentPrice = parseFloat(prices[0][1]['1b. price (USD)']);
        const roundedPrice = Math.round((currentPrice + 0.00001) * 100) / 100;
        this.setState({ currentPrice: roundedPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'), isLoaded: true });
      })
      .catch(err => console.log(err));
  }

  render() {

    return(

      <div>
        <div className="box inner-box">
          { this.state.currentPrice && <div>
            <h1 className="has-text-centered">${this.state.currentPrice}</h1>
            <hr />
            <p className="has-text-centered">Latest Bitcoin price</p>
          </div>}
          { !this.state.isLoaded && <div className="has-text-centered"><Spinner className="spinner-wrapper" name="ball-spin-fade-loader" color="#CDDC39" /><br /><br /></div> }
        </div>
      </div>

    );
  }
}

export default Price;
