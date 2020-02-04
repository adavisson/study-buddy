import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import ReactLogo from '../images/react-logo.png';

const ReactReduxCard = () => {
  return (
    <Card href="/react-redux">
      <Image src={ReactLogo} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>React/Redux</Card.Header>
      </Card.Content>
    </Card>
  );
}
 
export default ReactReduxCard;