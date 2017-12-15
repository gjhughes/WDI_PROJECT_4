import React from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Box, Button } from 'reactbulma';
import ReactMomentCountDown from 'react-moment-countdown';
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
        this.setState({ group: res.data, members: res.data.members });
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

        <div className="columns">
          <div className="column is-one-third">
            <Box >
              <Price />
            </Box>
          </div>

          <div className="column is-two-thirds">
            <Box>
              <div className="table-div">
                <table className="table is-fullwidth">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Current Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    { this.state.members.map(member =>
                      <tr key={member.id}>
                        <th>{member.user.firstName}</th>
                        <th>{member.points}</th>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Box>
          </div>
        </div>

        <div className="container">
          <div className="box">

            <div className="columns is-multiline is-fullwidth">
              {this.state.group.moments && this.state.group.moments.map(moment => {
                return(
                  <div className="column is-fullwidth has-text-centered" key={moment.id}>
                    { !moment.isPast &&
                      <Link to={`${this.props.match.params.id}/moments/${moment.id}`}>
                        <h1 className="heading">Pending / In Progress</h1>
                        <div className="box is-fullwidth inner-box">
                        Starting in: <span> </span>
                          <ReactMomentCountDown
                            toDate={ moment.lastBetTime }
                          />
                          <hr />
                          <h1 key={moment.id}><small>Ending at: <Moment format="Do MMMM YYYY, HH:mm a">{moment.endTime}</Moment></small></h1>
                        </div>
                      </Link>
                    }
                    { moment.isPast &&
                      <Link to={`${this.props.match.params.id}/moments/${moment.id}`}>
                        <h1 className="heading">Past Frames</h1>
                        <div className="box inner-box">
                          <h1 className="has-text-centered">Gavin Hughes</h1>
                          <small className="has-text-centered">Winner</small>
                          <hr />
                          <div key={moment.id}>
                            <small>Ended at: <Moment format="Do MMMM YYYY, HH:mm a">{moment.endTime}</Moment></small>
                          </div>
                        </div>
                      </Link>
                    }
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default GroupsShow;
