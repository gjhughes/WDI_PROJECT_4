import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import { Box, Button } from 'reactbulma';
// import Moment from 'react-moment';
import ReactMomentCountDown from 'react-moment-countdown';
// import { VictoryLine } from 'victory';


class MomentsShow extends React.Component{
  state = {
    moment: {},
    bets: [],
    data: []
  }

  currentValueInterval = null;

  componentDidMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}`)
      .then(res => {
        this.setState({ moment: res.data, bets: res.data.bets });
        console.log(res.data);
      })
      .catch(err => console.log(err));


    // this.currentValueInterval = setInterval(this.getCurrentValue.bind(this), 5000);
    // 60000
  }

  componentWillUnmount() {
    clearInterval(this.currentValueInterval);
  }

  getCurrentValue = () => {
    Axios
      .get(`/api/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}/data`)
      .then(res => this.setState({ moment: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return(

      <div className="container">
        <h1 className="smallLogo">alpha<span className="bitcoin"><i className="fa fa-btc" aria-hidden="true"></i></span>et</h1>
        <br />
        <hr />
        <Box className="predictionBox">
          <Link to={`/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}/bet`}>
            <Button primary fullwidth className="newBtn">Make your prediction for this Frame</Button>
          </Link>
        </Box>
        <hr />

        <div className="columns">
          <div className="column is-one-third">


            <Box>
              <div className="table-div">
                <h1 className="heading">Predictions for this Frame</h1>
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Prediction</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.state.bets.map(bet =>
                      <tr key={bet.id}>
                        <th>{bet.user.firstName}</th>
                        <th>${bet.prediction}</th>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Box>

          </div>
          <div className="column is-two-thirds">
            <Box className="timeBox">
              <h1 className="clockHeading heading">Time Remaining</h1>
              <br />
              <div className="countdown">
                <ReactMomentCountDown
                  toDate={ this.state.moment.endTime }
                  className="momentCountdown"
                />
              </div>
              <br />
            </Box>
          </div>
        </div>
        <hr />

        { this.state.moment.prevPrices && <h1>{this.state.moment.prevPrices.length}</h1>}
        {/* <ul>
          { this.state.moment.prevPrices && this.state.moment.prevPrices.map((price, i) =>
            <li key={i}>{price}</li>
          )}
        </ul> */}

      </div>
    );
  }
}

export default MomentsShow;
