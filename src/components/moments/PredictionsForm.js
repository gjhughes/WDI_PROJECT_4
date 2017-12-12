import React from 'react';

const PredictionsForm = ({ handleSubmit, handleChange, newBet }) => {
  return(
    <div className='container'>
      <h3>Make Prediction</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="prediction"
          label="Prediction"
          type="number"
          value={newBet.prediction}
          onChange={handleChange}>
        </input>
        <button>Submit</button>
      </form>
    </div>

  );
};

export default PredictionsForm;
