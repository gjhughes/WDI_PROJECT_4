import React from 'react';
import { Box, Field, Input, Button } from 'reactBulma';

const GroupsForm = ({ handleSubmit, handleChange, group }) => {
  return(
    <div className="container">
      <h1>Create New Group</h1>
      <Box>
        <form onSubmit={handleSubmit}>
          <Field>
            <Input
              type="text"
              name="groupName"
              onChange={handleChange}
              value={group.groupName}
              placeholder="Group Name">
            </Input>
            <br />
            <Input
              type="text"
              name="members"
              onChange={handleChange}
              value={group.members}
              placeholder="Add members">
            </Input>
            <div className='container'>
              <br />
              <Button primary>Create Group</Button>
            </div>
          </Field>
        </form>
      </Box>
    </div>
  );
};

export default GroupsForm;
