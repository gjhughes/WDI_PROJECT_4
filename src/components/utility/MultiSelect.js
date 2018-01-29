import React from 'react';
import Select from 'react-select';

const MultiSelect = ({ handleSelectChange, removeSelected, value, users }) => {
  return(
    <Select
      name="form-field-name"
      removeSelected={removeSelected}
      onChange={handleSelectChange}
      options={users}
      value={value}
      multi
      matchPos="start"
      placeholder="-- Add users to this group --"
    />
  );
};

export default MultiSelect;
