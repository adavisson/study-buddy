import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import HomeMenu from './components/HomeMenu';
import Home from './components/Home';
import JavaScript from './containers/JavaScript';
import Ruby from './containers/Ruby';
import HtmlCss from './containers/HtmlCss';


function App() {
  return (
    <Router>
      <div className="App">
        <HomeMenu />
        <Route exact path="/" component={Home} />
        <Route path="/javascript" component={JavaScript} />
        <Route path="/ruby" component={Ruby} />
        <Route path="/html-css" component={HtmlCss} />
      </div>
    </Router>
  );
}

export default App;
