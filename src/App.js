import React from 'react';
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
import Testing from './containers/Testing';
import ReactRedux from './containers/ReactRedux';

function App() {
  return (
    <Router>
      <div className="App">
        <HomeMenu />
        <Route exact path="/" component={Home} />
        <Route path="/js" component={JavaScript} />
        <Route path="/react-redux" component={ReactRedux} />
        <Route path="/ruby" component={Ruby} />
        <Route path="/html-css" component={HtmlCss} />
        <Route path="/testing" component={Testing} />
      </div>
    </Router>
  );
}

export default App;
