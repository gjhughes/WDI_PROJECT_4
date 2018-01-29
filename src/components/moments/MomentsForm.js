import React from 'react';

const MomentsForm = ({ handleChange, handleSubmit, newMoment }) => {
  return(
    <div className='section'>
      <div className='columns is-centered'>
        <div className='column is-8'>
          <h1 className="heading sub-heading has-text-left">Create a New Frame</h1>
          <div className='box'>
            <form onSubmit={handleSubmit}>
              <div className='field'>
                <label className="label has-text-left">Frame Start Time</label>
                <div className="control has-icons-left">
                  <input
                    className="input is-medium"
                    type="datetime-local"
                    placeholder="Group Name"
                    onChange={handleChange}
                    value={newMoment.lastBetTime}
                    name="lastBetTime"
                  />
                  <span className="icon is-medium is-left">
                    <i className="fa fa-calendar"></i>
                  </span>
                </div>
              </div>
              <div className='field'>
                <label className="label has-text-left">Frame End Time</label>
                <div className="control has-icons-left">
                  <input
                    className="input is-medium"
                    type="datetime-local"
                    placeholder="Group Name"
                    onChange={handleChange}
                    value={newMoment.endTime}
                    name="lastBetTime"
                  />
                  <span className="icon is-medium is-left">
                    <i className="fa fa-calendar"></i>
                  </span>
                </div>
              </div>
              <div className="control">
                <button className="button is-primary is-fullwidth is-medium">Create Frame</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MomentsForm;
