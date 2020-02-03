import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import JavaScript from './containers/JavaScript';
import Ruby from './containers/Ruby';
import HomeMenu from './components/HomeMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <HomeMenu />
        <Route exact path="/" component={Home} />
        <Route path="/javascript" component={JavaScript} />
        <Route path="/ruby" component={Ruby} />
      </div>
    </Router>
  );
}

export default App;
