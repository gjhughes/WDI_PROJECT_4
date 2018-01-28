import React from 'react';
import Axios from 'axios';

class Price extends React.Component{
  state = {
    bitcoin: {
      time: [],
      price: []
    },
    currentPrice: '',
    isLoaded: false
  }

    currentValueInterval = null;

    componentDidMount() {
      Axios
        .get('https://api.coindesk.com/v1/bpi/currentprice/GBP.json')
        .then(res => {
          const timeSeries = res.data[Object.keys(res.data)[0]];
          const time = timeSeries[Object.keys(timeSeries)[2]];
          const bpi = res.data[Object.keys(res.data)[2]];
          const gbp = bpi[Object.keys(bpi)[1]];
          const currentPrice = gbp[Object.keys(gbp)[3]];

          this.setState({ bitcoin: { time: time, price: currentPrice } });

        })
        .catch(err => console.log(err));

      // this.currentValueInterval = setInterval(this.getCurrentPrice.bind(this), 3000);
    }

    render() {
      return(
        <div>
          <div className="box inner-box">
            { this.state.bitcoin.price && <div>
              <h1 className="has-text-centered">£{this.state.bitcoin.price} {' '} at {this.state.bitcoin.time}</h1>
              <hr />
              <p className="has-text-centered">Latest Bitcoin price</p>
            </div>}
          </div>
        </div>
      );
    }
}

export default Price;
