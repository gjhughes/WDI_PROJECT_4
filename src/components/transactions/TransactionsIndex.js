import React from 'react';
import Axios from 'axios';

class TransactionsIndex extends React.Component {
  state = {
    transactions: {}
  }

  comopnentDidMount() {
    Axios
      .get('/api/transactions')
      .then(res => this.setState({ transactions: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <h1>Transactions Index</h1>
    );
  }
}

export default TransactionsIndex;
