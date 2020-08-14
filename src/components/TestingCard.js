import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import TestingLogo from '../images/mocha-chai-logo.png'

const TestingCard = () => {
  return (
    <Card href='/testing'>
      <Image src={TestingLogo} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Testing</Card.Header>
      </Card.Content>
    </Card>
  )
}

export default TestingCard
