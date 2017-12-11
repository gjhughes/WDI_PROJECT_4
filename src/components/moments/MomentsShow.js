import React from 'react';

const MomentsShow = ({ moment }) => {

  console.log(moment);
  return(
    <h1>Show</h1>
  );
};
//
//
//
// class MomentsShow extends React.Component{
//
//   componentWillMount() {
//     Axios
//       .get(`${this.props.match.params.id}`)
//       .then(req => console.log(req.data));
//   }
//
//   render() {
//     return(
//       <h1>Show</h1>
//     );
//   }
// }

export default MomentsShow;
