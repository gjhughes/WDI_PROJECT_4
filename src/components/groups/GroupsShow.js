import React from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Box, Button, Card, Media } from 'reactbulma';

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

        <Box>
          {/* <Leaderboard
            members={this.state.members}
          /> */}
        </Box>

        <h1 className="heading">Upcoming Frames</h1>
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
        </Box>

        <h1 className="heading">Previous Frames</h1>
        <Box>
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
        </Box>

      </div>
    );
  }
}

export default GroupsShow;
