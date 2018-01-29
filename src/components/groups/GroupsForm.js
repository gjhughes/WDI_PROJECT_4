import React from 'react';
import Select from 'react-select';

const GroupsForm = ({ handleSubmit, handleChange, handleMultiSelect, group, users, currentUser }) => {
  return(
    <div className='section'>
      <div className='columns is-centered'>
        <div className='column is-8'>
          <h1 className="heading sub-heading has-text-left">Create a New Group</h1>
          <div className='box register-box'>
            <div className='column is-12'>
              <form onSubmit={handleSubmit}>
                <div className='field'>
                  <label className='label has-text-left'>Group Name</label>
                  <div className="control has-icons-left">
                    <input
                      className="input is-medium"
                      type="text"
                      placeholder="Group Name"
                      onChange={handleChange}
                      value={group.name}
                      name="email"
                    />
                    <span className="icon is-medium is-left">
                      <i className="fa fa-group"></i>
                    </span>
                  </div>
                </div>
                <div className='field'>
                  <label className='label has-text-left'>Select Group Members</label>
                  <div className='control has-icons-left'>
                    <div className='select is-fullwidth is-medium'>
                      <select onChange={handleMultiSelect}>
                        <option>Select users to add to your group</option>
                        { users.map(user =>
                          <option key={user.id} value={ user }>{ user.firstName }{' '}{ user.lastName }</option>
                        )}
                      </select>
                    </div>
                    <div className="icon is-small is-left">
                      <i className="fa fa-user-plus"></i>
                    </div>
                  </div>
                </div>

                <div className="control">
                  <button className="button is-primary is-fullwidth is-medium">Create Group</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupsForm;
