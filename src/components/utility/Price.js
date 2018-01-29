import React from 'react';


class Price extends React.Component{
  state = {
    bitcoin: {
      price: '',
      time: ''
    }
  }

  render() {
    return(
      <h1>This is the Price</h1>
    );
  }
}

export default Price;
