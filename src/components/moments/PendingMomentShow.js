import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class PendingMomentShow extends React.Component{
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

    if(start > now ) {
      frame =
      <div className='section'>
        <div className='columns is-centered'>
          <div className='column is-10'>
            <h1 className='heading sub-heading has-text-left'>Pending Moment Show</h1>
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

export default PendingMomentShow;
