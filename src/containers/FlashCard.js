import React, { useState, useEffect } from 'react'
import { Header, Card, Button } from 'semantic-ui-react'

const FlashCard = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState('')
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [clicked, setClicked] = useState(false)
  const [asked, setAsked] = useState([])

  useEffect(() => {
    setCard()
  }, [])

  const isIndexFull = () => {
    if (asked.length >= props.questions.length - 1) {
      return true
    } else {
      return false
    }
  }

  const setCard = () => {
    isIndexFull()
    const index = Math.floor(Math.random() * props.questions.length)
    if (!asked.includes(index)) {
      setCurrentQuestion(props.questions[index].question)
      setCurrentAnswer(props.questions[index].answer)
      setClicked(false)
      if (isIndexFull()) {
        setAsked([])
      } else {
        setAsked([...asked, index])
      }
    } else {
      setCard()
    }
  }

  const buttonClick = (e) => {
    if (clicked) {
      setClicked(false)
    } else {
      setClicked(true)
    }
  }

  return (
    <div>
      <Header as='h1'>{props.subject}</Header>
      <div className='card-container'>
        <Card>
          <Card.Content>
            <Card.Header>{currentQuestion}</Card.Header>
            <Card.Description>
              {!clicked && <Button onClick={buttonClick}>See Answer</Button>}
              {clicked && currentAnswer}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
      <Button onClick={setCard}>New Flashcard</Button>
    </div>
  )
}

export default FlashCard
