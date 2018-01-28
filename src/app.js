import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/style.scss';

import Routes from './components/utility/Routes';
import Sidebar from './components/utility/Sidebar';

class App extends React.Component {

  render() {
    return (
      <Router>
        <section className="main-content columns is-fullheight">
          <aside className="column is-2 has-text-centered is-norrow-mobile is-fullheight section is-hidden-mobile">
            <Sidebar />
          </aside>
          <div className="container column is-10 has-text-centered">
            <Routes />
          </div>
        </section>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
