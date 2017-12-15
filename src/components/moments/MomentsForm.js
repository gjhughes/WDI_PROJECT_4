import React from 'react';
import { Box, Field, Control, Input, Button } from 'reactbulma';

const MomentsForm = ({ handleChange, handleSubmit, newMoment }) => {
  return(
    <div>
      <h1 className="smallLogo">alpha<span className="bitcoin"><i className="fa fa-btc" aria-hidden="true"></i></span>et</h1>
      <br />
      <hr />
      <div>
        <Box className="loginBox moment-box">
          <h1>Set a start time for this frame...</h1>
          <br />
          <Field>
            <Control>
              <Input
                medium
                onChange={handleChange}
                value={newMoment.lastBetTime}
                type="datetime-local"
                name="lastBetTime"
              />
            </Control>
          </Field>
          <h1>Set an end time for this frame...</h1>
          <br />
          <form onSubmit={handleSubmit}>
            <Field>
              <Control>
                <Input
                  medium
                  onChange={handleChange}
                  value={newMoment.endTime}
                  type="datetime-local"
                  name="endTime"
                />
              </Control>
            </Field>
            <Button primary fullwidth>Create Frame</Button>
          </form>
        </Box>
      </div>

    </div>
  );
};

export default MomentsForm;
