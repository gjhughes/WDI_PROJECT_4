import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import { Button } from 'react-materialize';

class MomentsShow extends React.Component{
  state = {
    moment: {},
    bets: []
  }

  componentDidMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}`)
      .then(res => {
        console.log(res.data);
        this.setState({ moment: res.data, bets: res.data.bets });
      })
      .catch(err => console.log(err));
  }

  render() {
    const endPrice = this.state.moment.endPrice;
    let roundedPrice = Math.round((endPrice + 0.00001) * 100) / 100;
    roundedPrice = roundedPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return(
      <div className='container'>
        <div className='container'>
          <h1>{this.state.moment.endTime}</h1>
          <p>Moment Show</p>
        </div>
        <div className='container'>
          <Link to={`/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}/bet`}>
            <Button waves="light">Make Prediction</Button>
          </Link>
          <h4>End price: ${roundedPrice} </h4>
        </div>

        <div className='container'>
          {this.state.bets.map(bet =>
            <p key={bet.id}>{bet.user.firstName} Prediction: {bet.prediction}</p>
          )}
        </div>

      </div>
    );
  }
}

export default MomentsShow;
