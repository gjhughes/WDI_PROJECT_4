import React from 'react';
import Axios from 'axios';
import { PieChart, Pie, Legend, Tooltip } from 'recharts';

class AssetPieChart extends React.Component {
  state = {
    user: []
  }
  //
  // componentDidMount() {
  //   Axios
  //     .get('api/plans')
  //     .then(res => this.setState( { user: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    // const data = [
    //     { name: 'GIA', value: {this.state.user.}}
    // ]

    return(
      <h1>Chart goes here</h1>
    );
  }

}

export default AssetPieChart;
