import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

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
        this.setState({ group: res.data, moments: res.data.moments });
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
    const pendingMoment = this.state.moments.filter(moment => moment.lastBetTime > now);
    return(
      <div className="groups-show-wrapper">
        <div className='section'>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <h1 className="heading sub-heading has-text-left">{ this.state.group.groupName }</h1>
              <div className="box wrapper-box">

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
              <h1 className="heading has-text-left sub-heading">Upcoming Frame</h1>
              <div className="box wrapper-box">
                <div className='box'>
                  { pendingMoment.length === 0 ?
                    <div>
                      <h1>There are no upcoming frames in this group.</h1>
                      <Link to={`/groups/${this.props.match.params.id}/moments/new`}><button>Create Frame</button></Link>
                    </div>
                    :
                    <h1>Something to See</h1>}
                </div>
              </div>
              <h1 className="heading has-text-left sub-heading">Previous Frames</h1>
              <div className="box wrapper-box past-moments">
                <div className='columns'>
                  <div className='column'>
                    { pastMoments.map(moment =>
                      <div key={moment.id} className='box past-moments-box'>
                        { moment.id }
                      </div>
                    )}
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
