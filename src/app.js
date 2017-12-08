import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/style.scss';

import Routes from './components/utility/Routes';
import NavBar from './components/utility/NavBar';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <NavBar />
            <br />
          </header>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
