import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import HtmlCssLogo from '../images/html-css-logo.png';

const HtmlCssCard = () => {
  return (
    <Card href="/html-css">
      <Image src={HtmlCssLogo} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>HTML/CSS</Card.Header>
      </Card.Content>
    </Card>
  );
}
 
export default HtmlCssCard;