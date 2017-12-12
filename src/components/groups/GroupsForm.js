import React from 'react';
import { Row, Input, Button, Icon } from 'react-materialize';


const GroupsForm = ({ handleSubmit, handleChange, handleSelectChange, group, users }) => {
  return(
    <div className='container'>
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
            name="members"
            onChange={handleSelectChange}
            // value={group.members}
            type="select"
            label="Add Members">
            {users.map(user =>
              <option
                data-value={user.id}
                key={user.id}>
                {user.firstName}{' '}{user.lastName}
              </option>
            )}
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
