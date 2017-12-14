import React from 'react';
import Axios from 'axios';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { Box, Button, Card, Media, Title, SubTitle, Level } from 'reactbulma';

import Price from '../prices/Prices';
// import Leaderboard from '../utility/Leaderboard';

class GroupsShow extends React.Component {
  state = {
    group: {}
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
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className='container'>
        <Box>
          <Link to={`/groups/${this.props.match.params.id}/moments/new`}>
            <Button primary outlined fullwidth>Create New Moment</Button>
          </Link>
        </Box>
        <Box >
          <Price />
        </Box>

        <h1 className="heading">Previous</h1>
        <Box>
          { this.state.group.moments && this.state.group.moments.map(moment => {
            return(
              <div key={moment.id}>{ moment.isPast &&
                <div>
                  <Card>
                    <Card.Content>
                      <Media>
                        <Media.Content>
                          <Title>Title</Title>
                          <p>End time: <Moment format="MMMM Do YYYY, HH:mm a">{moment.endTime}</Moment></p>
                          <small>Price at end of moment: ${moment.roundedPrice}</small>
                        </Media.Content>
                      </Media>
                    </Card.Content>
                  </Card>
                </div>
              }
              </div>
            );
          })}
        </Box>

        <h1 className="heading">Pending</h1>
        <Box>
          <h1>Future</h1>
          { this.state.group.moments && this.state.group.moments.map(moment => {
            return(
              <div key={moment.id}>
                { !moment.isPast &&
                  <div>
                    <p><Moment format="MMMM Do YYYY, HH:mm a">Ending at: {moment.endTime}</Moment></p>
                  </div>
                }
              </div>
            );
          })}
        </Box>

      </div>
    );
  }
}

export default GroupsShow;
//
// <Card key={group.id}>
//   <Card.Content>
//     <Media>
//       <Media.Content>
//         <Title is="4">{group.groupName}</Title>
//         <SubTitle><small>Group created by: {group.createdBy.firstName} {' '} {group.createdBy.lastName}</small></SubTitle>
//       </Media.Content>
//     </Media>
//     <Level textIsCentered className="level">
//       {group.members.map(member =>
//         <Level.Item key={member.id}>
//           {member.user.firstName}
//         </Level.Item>
//       )}
//     </Level>
//     <Link to={group.id}>
//       <Button primary outlined fullwidth>Show Group</Button>
//     </Link>
//   </Card.Content>
// </Card>
//
//   return(
//     <main>
//       <div className='container'>
//         <Link to={`/groups/${this.props.match.params.id}/moments/new`}>
//           <Button waves="light">New Moment</Button>
//         </Link>
//       </div>
//
//       <div className='container'>
//         <Price />
//       </div>
//
//       <div className='container'>
//         <h4>{this.state.currentPrice}</h4>
//       </div>
//
//       <div className='container'>
//         <h1>{this.state.group.groupName}</h1>
//         <h3>Moments</h3>
//         <Row>
//           {Object.keys(this.state.group).length !== 0 && this.state.group.moments.map(moment =>
//             <Col key={moment.id}>
//               <Card
//                 className="blue-grey darken1"
//                 textClassName="white-text"
//                 title={moment.endTime}>
//                 <h3>{moment.id}</h3>
//                 {moment.bets.map(bet =>
//                   <p key={bet.id}>{bet.user.firstName}: <span>{bet.prediction}</span></p>
//                 )}
//                 <Link to={`${this.props.match.params.id}/moments/${moment.id}`}>Show</Link>
//
//               </Card>
//             </Col>
//           )}
//         </Row>
//       </div>
//
//       {/* <div className="container">
//         <h3>Members</h3>
//         { Object.keys(this.state.group).length !== 0 && this.state.group.member.user.map(i =>
//           <div key={i.id}>
//             <p>{i.firstName} {i.lastName}</p>
//           </div>
//         )}
//       </div> */}
//       <div className='container'>
//         <Leaderboard />
//       </div>
//     </main>
//   );
// }
