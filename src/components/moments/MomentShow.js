import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class MomentShow extends React.Component{
  state ={
    moment: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}/moments/${this.props.match.params.momentId}`)
      .then(res => this.setState({ moment: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    let frame = null;
    const now = new Date().toISOString();
    const start = this.state.moment.lastBetTime;
    const bets = this.state.moment.bets;
    console.log(bets);
    if(start > now ) {
      frame =
      <div className='section'>
        <div className='columns is-centered'>
          <div className='column is-10'>
            <h1 className='heading sub-heading has-text-left'>Frame Pending</h1>
            <div className="box wrapper-box">
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
              <div className='box'>
                <div className="column is-12 level-item has-text-left">
                  <div className="is-fullwidth is-fullheight leaderboard-box">
                    <div className="columns level is-left">
                      <div className="column is-8 level-item">
                        <small className="heading">Name</small>
                      </div>
                      <div className="column is-4 level-item">
                        <small className="heading">Prediction</small>
                      </div>
                    </div>

                    <div className="columns is-level">
                      <div className='column is-8'>
                        { bets.map(bet =>
                          <div key={bet.id}>
                            <small >{bet.user.fullName}</small>
                            <br />
                          </div>
                        )}
                      </div>
                      <div className="column is-4">
                        { bets.map(bet =>
                          <div key={bet.id}>
                            <small>£{ bet.prediction }</small>
                            <br />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
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
    } else {
      frame =
        <div className='section'>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <h1 className='heading sub-heading has-text-left'>In Progress!!</h1>
              <div className="box wrapper-box">
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
