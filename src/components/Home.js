import React from 'react';
import { Header } from 'semantic-ui-react';
import JavaScriptCard from './JavaScriptCard';

const Home = () => {
  return (
    <div>
      <Header as="h1">Study Buddy</Header>
      <JavaScriptCard />
    </div>
  );
}
 
export default Home;