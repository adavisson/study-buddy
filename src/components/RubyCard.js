import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import RubyLogo from '../images/ruby-logo.png'

const RubyCard = () => {
  return (
    <Card href='/ruby'>
      <Image src={RubyLogo} wrapped ui={false} />
      <Card.Content>
        <Card.Header>Ruby</Card.Header>
      </Card.Content>
    </Card>
  )
}

export default RubyCard
