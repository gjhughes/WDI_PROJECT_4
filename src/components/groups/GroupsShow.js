import React from 'react';
import Axios from 'axios';
import { Row, Col, Card, Button, Collection, CollectionItem } from 'react-materialize';
import { Link } from 'react-router-dom';

class GroupsShow extends React.Component {
  state ={
    group: {},
    members: [],
    moments: []
  }

  componentWillMount() {
    Axios
      .get(`/api/groups/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ group: res.data, moments: res.data.moments, members: res.data.members });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(
      <main>
        <div className='container'>
          <Link to={`/groups/${this.props.match.params.id}/moments/new`}>
            <Button waves="light">New Moment</Button>
          </Link>
        </div>

        <div className='container'>
          <h1>{this.state.group.groupName}</h1>
          <h3>Moments</h3>
          <Row>
            {this.state.moments.map(moment =>
              <Col key={moment.id}>
                <Card
                  className="blue-grey darken1"
                  textClassName="white-text"
                  title={moment.endTime}>
                  <h3>{moment.id}</h3>
                  <Link to={`${this.props.match.params.id}/moments/${moment.id}`}>Show</Link>
                </Card>
              </Col>
            )}
          </Row>
        </div>

        <div className="container">
          <h3>Members</h3>
          <Collection>
            {this.state.members.map(member =>
              <CollectionItem key={member.id}>{member.firstName}{' '}{member.lastName}</CollectionItem>
            )}
          </Collection>
        </div>
      </main>
    );
  }
}

export default GroupsShow;
