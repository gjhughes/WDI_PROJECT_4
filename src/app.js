import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/style.scss';
import 'react-table/react-table.css';

import Routes from './components/utility/Routes';
// import NavBar from './components/utility/NavBar';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
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
