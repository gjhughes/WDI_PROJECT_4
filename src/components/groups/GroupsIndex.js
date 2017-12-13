import React from 'react';
import Axios from 'axios';
import { Row, Col, Card, Chip, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class GroupsIndex extends React.Component {
  state = {
    groups: [],
    members: []
  }

  componentWillMount() {
    Axios
      .get('/api/groups')
      .then(res => {
        this.setState({ groups: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <main className="container">
        <h1>Groups Index</h1>
        <div>
          <Link to="groups/new">
            <Button waves="light">Create Group</Button>
          </Link>
        </div>
        <Row>
          {this.state.groups.map(group =>
            <Col key={group.id}>
              <Card
                className="lighten"
                title={group.groupName}
                actions={[<Link key={group.id} to={`/groups/${group.id}`}>Show Group</Link>]}>
                Created by: {group.createdBy.firstName}<br />
                <small>Members: </small><br />
                {group.members.map(user =>
                  <Chip
                    className="blue-gray"
                    key={user.user.id}>
                    <img src={user.user.image} />
                    {user.user.firstName}
                  </Chip>
                )}
              </Card>
            </Col>
          )}
        </Row>
      </main>
    );
  }
}

export default GroupsIndex;
//
// import React from 'react';
// import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';
// import Toggle from 'material-ui/Toggle';
//
// class GroupsIndex extends React.Component {
//   state = {
//     groups: [],
//     members: []
//   }
//
//   componentWillMount() {
//     Axios
//       .get('/api/groups')
//       .then(res => {
//         this.setState({ groups: res.data });
//       })
//       .catch(err => console.log(err));
//   }
//
//
// render() {
//     return (
//       <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
//         <CardHeader
//           title="URL Avatar"
//           subtitle="Subtitle"
//           avatar="images/ok-128.jpg"
//           actAsExpander={true}
//           showExpandableButton={true}
//         />
//         <CardText>
//           <Toggle
//             toggled={this.state.expanded}
//             onToggle={this.handleToggle}
//             labelPosition="right"
//             label="This toggle controls the expanded state of the component."
//           />
//         </CardText>
//         <CardMedia
//           expandable={true}
//           overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
//         >
//           <img src="images/nature-600-337.jpg" alt="" />
//         </CardMedia>
//         <CardTitle title="Card title" subtitle="Card subtitle" expandable={true} />
//         <CardText expandable={true}>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
//           Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
//           Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
//         </CardText>
//         <CardActions>
//           <FlatButton label="Expand" onClick={this.handleExpand} />
//           <FlatButton label="Reduce" onClick={this.handleReduce} />
//         </CardActions>
//       </Card>
//     );
//   }
// }
