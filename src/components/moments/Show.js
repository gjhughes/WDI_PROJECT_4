// import React from 'react';
// import Axios from 'axios';
// import { Link } from 'react-router-dom';
//
// import PendingMomentShow from './PendingMomentShow';
// import MomentInProgress from './MomentInProgress';
//
// class Show extends React.Component{
//   state = {
//     moment: {}
//   }
//
//   componentDidMount() {
//     Axios
//       .get(`/api/groups/${this.props.match.params.id}/moments/${momentId}`)
//       .then(res => this.setState({ moment: res.data }))
//       .catch(err => console.log(err));
//   }
//
//   render() {
//     const now = new Date().toISOString();
//     console.log(now);
//     const moment = this.state.moment.lastBetTime > now  ? <PendingMomentShow /> : <MomentInProgress />;
//     return(
//       <div>
//         { moment }
//       </div>
//     );
//   }
// }
//
// export default Show;
