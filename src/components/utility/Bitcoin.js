import React from 'react';
import Axios from 'Axios';

class Bitcoin extends React.Component{
  state = {
    bitcoin: {
      price: '',
      time: ''
    }
  }

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
  }

  render() {
    return(
      <div>
        { this.state.bitcoin.price }
        { this.state.bitcoin.time }
      </div>
    );
  }
}

export default Bitcoin;
