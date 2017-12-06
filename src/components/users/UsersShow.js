import React    from 'react';
import Axios    from 'axios';
import { Link } from 'react-router-dom';


class UsersShow extends React.Component {
  state = {
    user: {},
    plans: []
  }

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({
        user: res.data,
        plans: res.data.plans
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.plans.map(plan =>
          <Link  key={plan.id} to={`/plans/${plan.id}`}>
            <p>{plan.planType}</p>
          </Link>
        )}
      </div>

    );
  }
}

export default UsersShow;
