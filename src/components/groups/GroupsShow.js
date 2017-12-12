import React from 'react';
import Axios from 'axios';
import { Row, Col, Card, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class GroupsShow extends React.Component {
  state = {
    currentPrice: '',
    group: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}`)
      .then(res => {
        console.log(res.data);
        this.setState({ group: res.data });
      })
      .catch(err => console.log(err));
  }

  // getCurrentPrice() {
  //   Axios
  //     .get('https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_INTRADAY&symbol=BTC&market=CNY&apikey=XTWGBR0H1M1TYI7R')
  //     .then(res => {
  //       const prices  = Object.entries(res.data['Time Series (Digital Currency Intraday)']);
  //       const currentPrice = parseFloat(prices[0][1]['1b. price (USD)']);
  //       const roundedPrice = Math.round((currentPrice + 0.00001) * 100) / 100;
  //       this.setState({ currentPrice: roundedPrice });
  //     })
  //     .catch(err => console.log(err));
  // }

  render() {
    return(
      <main>
        <div className='container'>
          <Link to={`/groups/${this.props.match.params.id}/moments/new`}>
            <Button waves="light">New Moment</Button>
          </Link>
        </div>

        <div className='container'>
          <h4>{this.state.currentPrice}</h4>
        </div>

        <div className='container'>
          <h1>{this.state.group.groupName}</h1>
          <h3>Moments</h3>
          <Row>
            {Object.keys(this.state.group).length !== 0 && this.state.group.moments.map(moment =>
              <Col key={moment.id}>
                <Card
                  className="blue-grey darken1"
                  textClassName="white-text"
                  title={moment.endTime}>
                  <h3>{moment.id}</h3>
                  {moment.bets.map(bet =>
                    <p key={bet.id}>{bet.user.firstName}: <span>{bet.prediction}</span></p>
                  )}
                  <Link to={`${this.props.match.params.id}/moments/${moment.id}`}>Show</Link>

                </Card>
              </Col>
            )}
          </Row>
        </div>

        <div className="container">
          <h3>Members</h3>
          { Object.keys(this.state.group).length !== 0 && this.state.group.members.map(member =>
            <div key={member.id}>
              <p>{member.firstName} {member.lastName}</p>
            </div>
          )}
        </div>
      </main>
    );
  }
}

export default GroupsShow;
