import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Auth from '../../lib/Auth';

class MomentShow extends React.Component{
  state ={
    moment: {},
    bets: [],
    ids: []
  }

  componentDidMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}`)
      .then(res => this.setState({ moment: res.data, bets: res.data.bets, ids: res.data.bets.map(bet => bet.user.id) }))
      .catch(err => console.log(err));
  }

  render() {
    const { userId } = Auth.getPayload();
    let frame = null;
    const now = new Date().toISOString();
    const start = this.state.moment.lastBetTime;
    const canBet = this.state.ids.includes(userId);
    if(start > now ) {
      frame =
      <div className='section'>
        <div className='columns is-centered'>
          <div className='column is-10'>
            <h1 className='heading sub-heading has-text-left'>Frame Pending</h1>
            <div className="box wrapper-box wrapper-box-one">
              <div className='columns mini-header'>
                <div className='column is-6'>
                  <h1 className='heading has-text-left'>Start Time</h1>
                </div>
                <div className='column is-6'>
                  <h1 className='heading has-text-left'>End Time</h1>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <Moment format="dddd DD MMMM YYYY">{ this.state.moment.lastBetTime }</Moment><br />
                    <Moment format="HH:mm:ss">{ this.state.moment.lastBetTime }</Moment>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <Moment format="dddd DD MMMM YYYY">{ this.state.moment.endTime }</Moment><br />
                    <Moment format="HH:mm:ss">{ this.state.moment.endTime }</Moment>
                  </article>
                </div>
              </div>
            </div>
            <h1 className='heading sub-heading has-text-left'>Current Predictions</h1>
            <div className='box wrapper-box'>
              <div className='box eaderboard-box'>
                <div className="column is-12 level-item has-text-left">
                  <div className="is-fullwidth is-fullheight leaderboard-box">
                    <div className="columns level is-left">
                      <div className="column is-8 level-item">
                        <small className="heading mini-header">Name</small>
                      </div>
                      <div className="column is-4 level-item">
                        <small className="heading mini-header">Prediction</small>
                      </div>
                    </div>

                    <div className="columns is-level">
                      <div className='column is-8'>
                        { this.state.bets.map(bet =>
                          <div key={bet.id}>
                            <small className="small-item">{bet.user.fullName}</small>
                            <br />
                          </div>
                        )}
                      </div>
                      <div className="column is-4">
                        { this.state.bets.map(bet =>
                          <div key={bet.id}>
                            <small className="small-item">£{ bet.prediction }</small>
                            <br />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            { canBet === false ?
              <div>
                <h1 className='heading sub-heading has-text-left'>Make Prediction</h1>
                <div className='box wrapper-box'>
                  <Link to={`/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}/bet`}>
                    <div className='box'>
                      Yo
                    </div>
                  </Link>
                </div>
              </div>
              :
              <div>
                <h1 className='heading sub-heading has-text-left'>Prediction Made</h1>
                <div className='box wrapper-box'>
                  <div className='box'>
                    Your prediction for this frame has been made
                  </div>
                </div>
              </div>
            }
          </div>
        </div>
      </div>;
    } else {
      frame =
        <div className='section'>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <h1 className='heading sub-heading has-text-left'>In Progress!!</h1>
              <div className="box wrapper-box wrapper-box-one">
                <div className='columns mini-header'>
                  <div className='column is-6'>
                    <h1 className='heading has-text-left'>Start Time</h1>
                  </div>
                  <div className='column is-6'>
                    <h1 className='heading has-text-left'>End Time</h1>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      { this.state.moment.lastBetTime }
                    </article>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      { this.state.moment.endTime }
                    </article>
                  </div>
                </div>
              </div>
              <h1 className='heading sub-heading has-text-left'>Current Predictions</h1>
              <div className='box wrapper-box'>
                <div className='box'>
                  Yo
                </div>
              </div>
              <h1 className='heading sub-heading has-text-left'>Make Prediction</h1>
              <div className='box wrapper-box'>
                <Link to={`/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}/bet`}>
                  <div className='box'>
                    Yo
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>;
    }
    return(
      <div>
        { frame }
      </div>
    );
  }
}

export default MomentShow;
