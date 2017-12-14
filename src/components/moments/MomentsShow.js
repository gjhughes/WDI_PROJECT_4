import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import { Box, Button, Table } from 'reactbulma';
import Moment from 'react-moment';
import ReactMomentCountDown from 'react-moment-countdown';

class MomentsShow extends React.Component{
  state = {
    moment: {},
    bets: []
  }

  componentDidMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}`)
      .then(res => {
        this.setState({ moment: res.data, bets: res.data.bets });
        console.log(res.data);
      })
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

        <div className="columns">
          <div className="column is-one-third">
            <h1 className="heading">Predictions for this Frame</h1>
            <Box>
              <Table>
                <Table.Head>
                  <Table.Tr>
                    <Table.Th>User</Table.Th>
                    <Table.Th>Prediction</Table.Th>
                  </Table.Tr>
                </Table.Head>
                <Table.Body>
                  {this.state.bets.map(bet =>
                    <Table.Tr key={bet.key}>
                      <Table.Td>{bet.user.firstName}{' '}{bet.user.lastName}</Table.Td>
                      <Table.Td>${bet.prediction.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}</Table.Td>
                    </Table.Tr>
                  )}
                </Table.Body>
              </Table>
            </Box>
          </div>
          <div className="column is-two-thirds">
            <h1 className="heading">Time remaining</h1>
            <Box className="timeBox">
              <h1 className="clockHeading">Time Remaining</h1>
              <div className="countdown">
                <strong><ReactMomentCountDown
                  toDate={ this.state.moment.endTime }
                  className="momentCountdown"
                /></strong>
              </div>
            </Box>
          </div>
        </div>

      </div>


    );
  }
}

export default MomentsShow;
