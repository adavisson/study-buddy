import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import { Header } from 'semantic-ui-react';


function App() {
  return (
    <div className="App">
      <Header as="h1">Study Buddy</Header>
    </div>
  );
}

export default App;
