import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

class GroupsIndex extends React.Component {
  state = {
    groups: []
  }

  componentWillMount() {
    Axios
      .get('/api/groups')
      .then(res => {
        this.setState({ groups: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return(

      <div className="section login-section">
        <div className='columns is-centered'>
          <div className="box wrapper-box has-text-centered column is-10">
            <h1>All Groups</h1>
            <br />

            <div className='columns is-centered'>
              { this.state.groups.map(group =>
                <div  key={group.id} className='column is-6'>
                  <Link to={`groups/${group.id}`}>
                    <div className="box group-box">
                      <small>{ group.groupName }</small>


                      <div className='level is-mobile'>
                        <div className='level-item has-text-centered'>
                          <div>
                            <p className="heading">1st</p>
                            <p className="">Name</p>
                          </div>
                        </div>
                        <div className='level-item has-text-centered'>
                          <div>
                            <p className='heading'>2nd</p>
                            <p className=''>Name</p>
                          </div>
                        </div>
                        <div className='level-item has-text-centered'>
                          <div>
                            <p className='heading'>3rd</p>
                            <p className=''>Name</p>
                          </div>
                        </div>
                      </div>

                      <div className=''>
                        <small>Number of past frames in this group: { group.moments.length }</small>
                      </div>

                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>






      // <div className="container">
      //   <div className="box">
      //     <div className="columns is-multiline is-fullwidth">
      //       {this.state.groups.map(group =>
      //         <div className="column is-half has-text-centered" key={group.id}>
      //           <div className="box inner-box" key={group.id}>
      //             <h1 className="has-text-centered">{group.groupName}</h1>
      //             <small className="has-text-centered">Created by: {group.createdBy.firstName}{' '}{group.createdBy.lastName}</small>
      //             <hr />
      //             <div className="level">
      //               {group.members.map(member =>
      //                 <div key={member.id}>
      //                   <div className="level-item has-text-centered">
      //                     <div >
      //                       <small>{member.user.firstName}</small>
      //                     </div>
      //                   </div>
      //                   <div className="level-item has-text-centered">
      //                     <div >
      //                       <small>{member.user.lastName}</small>
      //                     </div>
      //                   </div>
      //                 </div>
      //               )}
      //             </div>
      //             <Link to={`groups/${group.id}`}>
      //               <Button primary fullwidth className="show-btn">Show Group</Button>
      //             </Link>
      //           </div>
      //         </div>
      //       )}
      //     </div>
      //   </div>
      // </div>


    );
  }
}

export default GroupsIndex;
