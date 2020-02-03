import React from 'react';
import { Header } from 'semantic-ui-react';
import JavaScriptCard from './JavaScriptCard';
import RubyCard from './RubyCard';

const Home = () => {
  return (
    <div>
      <Header as="h1">Study Buddy</Header>
      <div className="card-container">
        <a href="/javascript"><JavaScriptCard /></a>
        <a href="/ruby"><RubyCard /></a>
      </div>
    </div>
  );
}
 
export default Home;