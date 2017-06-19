import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

import AppPage from './components/pages/AppPage';
import Login from './components/pages/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
            <Route exact path='/' component={AppPage}/>
            <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
