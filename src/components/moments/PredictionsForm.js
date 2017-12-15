import React from 'react';

import { Control, Button, Input } from 'reactbulma';

const PredictionsForm = ({ handleSubmit, handleChange, newBet }) => {
  return(
    <div className="container">
      <h1 className="smallLogo">alpha<span className="bitcoin"><i className="fa fa-btc" aria-hidden="true"></i></span>et</h1>
      <br />
      <hr />
      <br />

      <div className="box prediction-box inner-box">
        <h1>Predict End Price </h1>
        <br />
        <form onSubmit={handleSubmit}>
          <Control>
            <Input
              medium
              placeholder="Predicted end price for this frame"
              name="prediction"
              label="Prediction"
              type="number"
              value={newBet.prediction}
              onChange={handleChange}
            />
          </Control>
          <br />
          <Button fullwidth primary className="newBtn">Submit</Button>
        </form>
      </div>
    </div>


  );
};

export default PredictionsForm;
