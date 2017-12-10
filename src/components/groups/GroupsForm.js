import React from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';

const GroupsForm = ({ handleSubmit, handleChange, group }) => {
  return(
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Row>
          <Input
            s={12}
            type="text"
            name="groupName"
            onChange={handleChange}
            value={group.groupName}
            label="Group Name">
            <Icon>group</Icon>
          </Input>
        </Row>
        <Row>
          <Input
            s={12}
            type="text"
            name="members"
            onChange={handleChange}
            value={group.members}
            label="Add Members">
            <Icon>group</Icon>
          </Input>
        </Row>
        <Row>
          <Button>Create Group</Button>
        </Row>
      </form>
    </div>
  );
};

export default GroupsForm;
