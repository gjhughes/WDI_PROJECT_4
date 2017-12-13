import React from 'react';
import Axios from 'axios';
import { Row, Col, Card, Chip, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class GroupsIndex extends React.Component {
  state = {
    groups: []
  }

  componentWillMount() {
    Axios
      .get('/api/groups')
      .then(req => {
        console.log(req.data);
        this.setState({ groups: req.data });
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
                // textClassName="black-text"
                title={group.groupName}
                actions={[<Link key={group.id} to={`/groups/${group.id}`}>Show Group</Link>]}>
                Created by: {group.createdBy.firstName}<br />
                <small>Members: </small><br />
                {group.members.map(member =>
                  <Chip
                    className="blue-gray"
                    key={member.id}>
                    <img src={member.image} />
                    {member.firstName}
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
