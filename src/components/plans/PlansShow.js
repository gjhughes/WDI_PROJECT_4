import React    from 'react';
import Axios    from 'axios';

class PlansShow extends React.Component {

  componentWillMount() {
    Axios
      .get(`/api/plans/${this.props.match.params.id}`)
      .then(res => this.setState({ watch: res.data }))
      .catch(err => console.log(err));
  }


}

export default PlansShow;
