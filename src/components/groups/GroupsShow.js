import React from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Box, Button } from 'reactbulma';

import Price from '../prices/Prices';
// import Leaderboard from '../utility/Leaderboard';

class GroupsShow extends React.Component {
  state = {
    group: {},
    members: []
  }

  componentDidMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}`)
      .then(res => {

        res.data.moments = res.data.moments.map(moment => {
          moment.isPast = new Date(moment.endTime) < new Date(Date.now());
          moment.roundedPrice = Math.round((moment.endPrice + 0.00001) * 100) / 100;
          moment.roundedPrice = moment.roundedPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
          return moment;
        });
        this.setState({ group: res.data });
        console.log(this.state.group);
        console.log(res.data.moments.map(moment => moment.isPast));
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className='container'>
        <h1 className="smallLogo">alpha<span className="bitcoin"><i className="fa fa-btc" aria-hidden="true"></i></span>et</h1>
        <br />
        <hr />
        <Box>
          <Link to={`/groups/${this.props.match.params.id}/moments/new`}>
            <Button primary fullwidth className="newBtn">Start a New Frame</Button>
          </Link>
        </Box>
        <hr />
        <Box >
          <Price />
        </Box>

        <div className="container">
          <div className="box">
            <h1 className="heading">Upcoming / In Progress</h1>
            <div className="columns is-multiline is-fullwidth">
              {this.state.group.moments && this.state.group.moments.map(moment => {
                return(
                  <div className="column is-half has-text-centered" key={moment.id}>
                    { !moment.isPast &&
                      <div className="box inner-box">
                        <h1 key={moment.id}>Test</h1>
                      </div>
                    }
                  </div>
                );
              })}
            </div>
            <h1 className="heading">Past Frames</h1>
            <div className="columns is-multiline is-fullwidth">
              {this.state.group.moments && this.state.group.moments.map(moment => {
                return(
                  <div className="column is-half has-text-centered" key={moment.id}>
                    <Link to={`${this.props.match.params.id}/moments/${moment.id}`}>
                      <div className="box inner-box">
                        <h1 className="has-text-centered">Gavin Hughes</h1>
                        <small className="has-text-centered">Winner</small>
                        <hr />
                        <div key={moment.id}>
                          <small>Ended at: <Moment format="Do MMMM YYYY, HH:mm a">{moment.endTime}</Moment></small>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>



        {/* <h1 className="heading">Upcoming Frames</h1>
        <Box>
          <div>
            { this.state.group.moments && this.state.group.moments.map(moment => {
              return(
                <div key={moment.id}>
                  { !moment.isPast &&
                  <Link to={`${this.props.match.params.id}/moments/${moment.id}`}>
                    <Card className="frameCard">
                      <Card.Content>
                        <Media>
                          <Media.Content>
                            <small>Starting at: <Moment format="Do MMMM YYYY, HH:mm a">{moment.lastBetTime}</Moment></small>
                          </Media.Content>
                        </Media>
                      </Card.Content>
                    </Card>
                  </Link>
                  }
                </div>
              );
            })}
          </div>
        </Box> */}
        {/* <Box>
          <div>
            { this.state.group.moments && this.state.group.moments.map(moment => {
              return(
                <div key={moment.id}>
                  <Link to={`${this.props.match.params.id}/moments/${moment.id}`}>
                    <Card className="frameCard">
                      <Card.Content>
                        <Media>
                          <Media.Content>
                            <small>Ended at: <Moment format="Do MMMM YYYY, HH:mm a">{moment.endTime}</Moment></small>
                          </Media.Content>
                        </Media>
                      </Card.Content>
                    </Card>
                  </Link>
                  <br />
                </div>
              );
            })}
          </div>
        </Box> */}

      </div>
    );
  }
}

export default GroupsShow;
