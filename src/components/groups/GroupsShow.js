import React from 'react';
import Axios from 'axios';

import Bitcoin from '../utility/Bitcoin';

class GroupsShow extends React.Component{
  state = {
    group: {},
    scores: {},
    sortedScores: {
      first: {
        name: '',
        score: ''
      },
      second: {
        name: '',
        score: ''
      },
      third: {
        name: '',
        score: ''
      }
    }
  }

  componentDidMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ group: res.data });
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
          first: {
            name: sortedScores[0][0], score: sortedScores[0][1]
          },
          second: {
            name: sortedScores[1][0], score: sortedScores[1][1]
          },
          third: {
            name: sortedScores[2][0], score: sortedScores[2][1]
          }
        }});
      });
  }


  render() {
    return(
      <div>
        <h1>{ this.state.group.groupName }</h1>
        <div className='section'>
          <div className='columns is-centered'>
            <div className='column is-10'>
              <div className="box wrapper-box">
                <div className="columns level">
                  <div className="column is-4 level-item">
                    <div className="box is-fullwidth is-fullheight">
                      <Bitcoin />
                    </div>
                  </div>
                  <div className="column is-8 level-item has-text-left">
                    <div className="box is-fullwidth is-fullheight">
                      <div className="columns level is-left">
                        <div className="column is-2 level-item">
                          <small>Pos</small>
                        </div>
                        <div className="column is-6 level-item">
                          <small>Name</small>
                        </div>
                        <div className="column is-4 level-item">
                          <small>Score</small>
                        </div>
                      </div>
                      <div className="columns is-level">
                        <div className="column is-2">
                          <small>1</small>
                        </div>
                        <div className="column is-6">
                          <small>{ this.state.sortedScores.first.name }</small>
                        </div>
                        <div className="column is-4">
                          <small>{ this.state.sortedScores.first.score }</small>
                        </div>
                      </div>
                      <div className="columns is-level">
                        <div className="column is-2">
                          <small>2</small>
                        </div>
                        <div className="column is-6">
                          <small>{ this.state.sortedScores.second.name  }</small>
                        </div>
                        <div className="column is-4">
                          <small>{ this.state.sortedScores.second.score }</small>
                        </div>
                      </div>
                      <div className="columns is-level">
                        <div className="column is-2">
                          <small>3</small>
                        </div>
                        <div className="column is-6">
                          <small>{ this.state.sortedScores.third.name }</small>
                        </div>
                        <div className="column is-4">
                          <small>{ this.state.sortedScores.third.score }</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box wrapper-box">
                <div className='box'>
                  hello
                </div>
              </div>
              <div className="box wrapper-box">
                <div className='box'>
                  hello
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
