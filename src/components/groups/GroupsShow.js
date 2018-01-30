import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

import Bitcoin from '../utility/Bitcoin';

class GroupsShow extends React.Component{
  state = {
    group: {},
    moments: [],
    scores: {},
    sortedScores: {
      first: { name: '',  score: '' },
      second: { name: '', score: '' },
      third: { name: '', score: '' }
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          group: res.data,
          moments: res.data.moments
        });
        const members = this.state.group.members;
        const names = members.map(member => member.user.fullName);
        const points = members.map(member => member.points);
        const scores = {};
        names.forEach((key, i) => scores[key] = points[i]);
        this.setState({ scores: scores });
        const sortedScores = [];
        for (var score in this.state.scores) {
          sortedScores.push([score, this.state.scores[score]]);
        }
        sortedScores.sort(function(a, b) {
          return b[1] - a[1];
        });
        this.setState({ sortedScores: {
          first: { name: sortedScores[0][0], score: sortedScores[0][1] },
          second: { name: sortedScores[1][0], score: sortedScores[1][1] },
          third: { name: sortedScores[2][0], score: sortedScores[2][1] }
        }});
      });
  }

  render() {
    const now = new Date().toISOString();
    const pastMoments = this.state.moments.filter(moment => moment.endTime < now);
    const pending = this.state.moments.filter(moment => moment.lastBetTime > now);
    const inProgress = this.state.moments.filter(moment => moment.endTime > now && moment.lastBetTime < now);
    let frame = null;
    if(pending.length !== 0) {
      frame =
      <div>
        { pending.map(frame =>
          <div key={frame.id}>
            <h1 className='heading has-text-left sub-heading'>Next Frame</h1>
            <div className='box wrapper-box'>
              <Link to={`/groups/${this.props.match.params.id}/moments/${frame.id}`}>
                <div className='box'>
                  <small>This frame will begin on <Moment format="ddd DD MMMM YYYY">{ frame.lastBetTime }</Moment> at <Moment format="HH:mm">{frame.lastBetTime}</Moment>.  Click here to make your prediction.</small>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>;
    } else if(inProgress.length !== 0) {
      frame =
      <div>
        { inProgress.map(frame =>
          <div key={frame.id}>
            <h1 className='heading has-text-left sub-heading'>In Progress</h1>
            <div className='box wrapper-box'>
              <Link to={`/groups/${this.props.match.params.id}/moments/${frame.id}`}>
                <div className='box'>
                  View This Frame
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>;
    } else if(pending.length === 0 && inProgress.length === 0) {
      frame =
      <div>
        { inProgress.length === 0 && pending.length === 0 &&
        <div>
          <h1 className='heading has-text-left sub-heading'>Create a Frame</h1>
          <div className='box wrapper-box'>
            <Link to={`/groups/${this.props.match.params.id}/moments/new`}>
              <div className='box'>
                There are now active frames in this group.  Click here to create one.
              </div>
            </Link>
          </div>
        </div>
        }
      </div>;
    }
    console.log(pastMoments);
    return(
      <div className="groups-show-wrapper">
        <div className='section'>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <h1 className="heading sub-heading has-text-left">{ this.state.group.groupName }</h1>
              <div className="box wrapper-box wrapper-box-one">
                <div className='columns mini-header'>
                  <div className='column is-4'>
                    <h1 className='heading has-text-left'>Current Price</h1>
                  </div>
                  <div className='column is-8'>
                    <h1 className='heading has-text-left'>Current Leaderboard</h1>
                  </div>
                </div>
                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <article className="tile is-child box">
                      <Bitcoin />
                    </article>
                  </div>
                  <div className="tile is-parent is-8">
                    <article className="tile is-child box">
                      <div className="column is-12 level-item has-text-left">
                        <div className="is-fullwidth is-fullheight leaderboard-box">
                          <div className="columns level is-left">
                            <div className="column is-3 level-item">
                              <small className="heading">Pos</small>
                            </div>
                            <div className="column is-6 level-item">
                              <small className="heading">Name</small>
                            </div>
                            <div className="column is-3 level-item">
                              <small className="heading">Score</small>
                            </div>
                          </div>
                          <div className="columns is-level">
                            <div className="column is-3">
                              <small>1</small>
                            </div>
                            <div className="column is-6">
                              <small>{ this.state.sortedScores.first.name }</small>
                            </div>
                            <div className="column is-3">
                              <small>{ this.state.sortedScores.first.score }</small>
                            </div>
                          </div>
                          <div className="columns is-level">
                            <div className="column is-3">
                              <small>2</small>
                            </div>
                            <div className="column is-6">
                              <small>{ this.state.sortedScores.second.name  }</small>
                            </div>
                            <div className="column is-3">
                              <small>{ this.state.sortedScores.second.score }</small>
                            </div>
                          </div>
                          <div className="columns is-level">
                            <div className="column is-3">
                              <small>3</small>
                            </div>
                            <div className="column is-6">
                              <small>{ this.state.sortedScores.third.name }</small>
                            </div>
                            <div className="column is-3">
                              <small>{ this.state.sortedScores.third.score }</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div>
                { frame }
              </div>
              <div>
                <h1 className="heading has-text-left sub-heading">Previous Frames</h1>
                <div className="box wrapper-box past-moments">
                  <div className='columns'>
                    <div className='column'>
                      { pastMoments.map(frame =>
                        <div key={frame.id} className='box past-moments-box'>
                          <div className='columns is-level is-centered'>
                            <div className='column is-4'>
                              <small className="heading">End Time</small>
                              <small><Moment format="DD/MM/YY HH:mm">{ frame.endTime }</Moment></small>
                            </div>
                            <div className='column is-4'>
                              <small className="heading">End Price</small>
                              <small className="heading">£{ frame.endPrice }</small>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupsShow;
