import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import GeneralLogo from '../images/general-logo.jpg';

const GeneralCard = () => {
  return (
    <Card href="/general">
      <Image src={GeneralLogo} wrapped ui={false}/>
      <Card.Content>
        <Card.Header>General</Card.Header>
      </Card.Content>
    </Card>
  );
}
 
export default GeneralCard;