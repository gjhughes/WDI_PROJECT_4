import React from 'react';

const MomentsForm = ({ handleChange, handleSubmit, newMoment }) => {
  return(
    <form onSubmit={handleSubmit}>
      <h1>Moments Form</h1>
      <input
        name="endTime"
        label="End Date"
        type="datetime-local"
        value={newMoment.endTime}
        onChange={handleChange}>
      </input>
      <input
        name="lastBetTime"
        label="Last Bet"
        type="datetime-local"
        onChange={handleChange}
        value={newMoment.lastBetTime}>
      </input>
      
      <button>Create</button>
    </form>
  );
};

export default MomentsForm;
