import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import JavaLogo from '../images/java-logo.jpg';

const JavaCard = () => {
  return (
    <Card href="/js">
      <Image src={JavaLogo} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>Java</Card.Header>
      </Card.Content>
    </Card>
  );
}
 
export default JavaCard;