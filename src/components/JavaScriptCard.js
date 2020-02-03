import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import JsLogo from '../images/JavaScript-logo.png';

const JavaScriptCard = () => {
  return (
    <Card>
      <Image src={JsLogo} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>JavaScript</Card.Header>
      </Card.Content>
    </Card>
  );
}
 
export default JavaScriptCard;