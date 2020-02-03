import React from 'react';
import { Header } from 'semantic-ui-react';
import JavaScriptCard from './JavaScriptCard';

const Home = () => {
  return (
    <div className="card-container">
      <Header as="h1">Study Buddy</Header>
      <a href="/javascript"><JavaScriptCard /></a>
    </div>
  );
}
 
export default Home;