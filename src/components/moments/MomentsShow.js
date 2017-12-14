import React from 'react';
import Axios from 'axios';

import { Link } from 'react-router-dom';
import { Box, Button, Card, Media, Table, Level } from 'reactbulma';

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
    const endPrice = this.state.moment.endPrice;
    let roundedPrice = Math.round((endPrice + 0.00001) * 100) / 100;
    roundedPrice = roundedPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
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

        <h1 className="heading">Predictions for this Frame</h1>
        <Level>
          <Level.Left>
            <Level.Item>
              <Box className="predictions">
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
            </Level.Item>
          </Level.Left>

          <Level.Right>
            <Level.Item hasTextCentered>
              <Box className="timer">
                <h1>Right</h1>
              </Box>
            </Level.Item>
          </Level.Right>



        </Level>




      </div>






      // <div className='container'>
      //   <div className='container'>
      //     <h1>{this.state.moment.endTime}</h1>
      //     <p>Moment Show</p>
      //   </div>
      //   <div className='container'>
      //     <Link to={`/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}/bet`}>
      //       <Button waves="light">Make Prediction</Button>
      //     </Link>
      //     <h4>End price: ${roundedPrice} </h4>
      //   </div>
      //
      //   <div className='container'>
      //     {this.state.bets.map(bet =>
      //       <p key={bet.id}>{bet.user.firstName} Prediction: {bet.prediction}</p>
      //     )}
      //   </div>

      // </div>
    );
  }
}

export default MomentsShow;
