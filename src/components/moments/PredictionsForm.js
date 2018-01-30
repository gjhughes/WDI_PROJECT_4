import React from 'react';

const PredictionsForm = ({ handleSubmit, handleChange, newBet }) => {
  return(
    <div className='section'>
      <div className='columns is-centered'>
        <div className='column is-8'>
          <h1 className="heading sub-heading has-text-left">Make Prediction</h1>
          <div className='box register-box'>
            <div className='column is-12'>
              <form onSubmit={handleSubmit}>
                <div className='field'>
                  <label className='label has-text-left'>Group Name</label>
                  <div className="control has-icons-left">
                    <input
                      className="input is-medium"
                      name="prediction"
                      type="number"
                      value={newBet.prediction}
                      onChange={handleChange}
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-gbp"></i>
                    </span>
                  </div>
                </div>
                <div className="control">
                  <button className="button is-primary is-fullwidth is-medium">Make Prediction</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PredictionsForm;
