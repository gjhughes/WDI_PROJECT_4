import React from 'react';
import Axios from 'axios';
// import Moment from 'moment';
import { Link } from 'react-router-dom';
import { Box, Card, Title, SubTitle, Level, Button } from 'reactbulma';

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
      <div className='container'>
        <Box>
          <Link to={'/groups/new'}>
            <Button primary outlined fullwidth>Start New Group</Button>
          </Link>
        </Box>
        {this.state.groups.map(group =>
          <Box key={group.id}>
            <Card >
              <Card.Content>
                <Title is="4">{group.groupName}</Title>
                <SubTitle><small>Group created by: {group.createdBy.firstName} {' '} {group.createdBy.lastName}</small></SubTitle>

                <Level textIsCentered className="level">
                  <Level.Item>
                    Current Rankings:
                  </Level.Item>
                  {group.members.map(member =>
                    <Level.Item key={member.id}>
                      {member.user.firstName}
                    </Level.Item>
                  )}
                </Level>
                <Link to={`groups/${group.id}`}>
                  <Button outlined fullwidth>Show Group</Button>
                </Link>
              </Card.Content>
            </Card>
          </Box>
        )}
      </div>
    );
  }
}

export default GroupsIndex;
