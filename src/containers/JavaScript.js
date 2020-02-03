import React, {useState, useEffect} from 'react';
import { Header, Card, Button } from 'semantic-ui-react';

const JavaScript = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [clicked, setClicked] = useState(false);
  const [asked, setAsked] = useState([]);
  const questions = [
    {
      question: 'What is a Closure?',
      answer: 'A function that returns a function. It allows a function to have "private" variables.'
    },
    {
      question: 'What is a Callback:',
      answer: 'A function that is passed into another function as an argument.'
    },
    {
      question: 'What is a Promise?',
      answer: 'An object that represents the eventual completion (or failure) of an asynchronous operation. A promise can be in 1 of 3 states: pending, fulfilled, rejected.'
    },
    {
      question: 'Explain the "this" keyword...',
      answer: 'The "this" keyword refers to the object that it belongs to.'
    },
    {
      question: 'Explain the Virtual DOM...',
      answer: 'When components rerender, the virtual DOM is updated, a diff is performed between the virtual DOM and the DOM, and then the HTML DOM only changes the updated elements instead of rerendering the whole DOM.'
    },
    {
      question: 'What is a Pure Function',
      answer: 'A function that given the same input will always produce the same output, and produces no side effects.'
    },
    {
      question: 'What are Side Effects?',
      answer: 'Any application state change that is observable outside the called function other than its return value.'
    },
    {
      question: 'What are Higher-Order Functions?',
      answer: 'Functions that take other functions as arguments or return functions as their results. Examples include: .map(), .sort(), .reduce(), .filter(), and .forEach()'
    },
    {
      question: 'What is a Stateful Component?',
      answer: 'Depends on its own state and can change that state.'
    },
    {
      question: 'What is a Stateless Component?',
      answer: 'Does not have state, but receives props.'
    },
    {
      question: 'Describe the 3 Principles of React...',
      answer: '1) The state of the whole application is stored in an object tree within a single store. \n 2) The only way to change the state is to emit an action. \n 3) Changes are made with pure functions.'
    },
    {
      question: 'What are the 3 parts of Redux?',
      answer: '1) Actions 2)Reducers 3)Store'
    },
    {
      question: 'What are Redux Actions?',
      answer: 'Events that send data from the application to the store.'
    },
    {
      question: 'What are Redux Reducers?',
      answer: 'Pure functions that take the current state of the application and an action, and then return a new state.'
    },
    {
      question: 'What is the Redux Store?',
      answer: 'The object that holds the application state and provides a few helper methods to access the state, dispatch actions, and register listeners.'
    }
  ]

  useEffect(() => {
    setCard();
  },[]);

  const isIndexFull = () => {
    if (asked.length >= questions.length){
      setAsked([]);
    }
  }

  const setCard = () => {  
    const index = Math.floor(Math.random() * questions.length);
    if (!asked.includes(index)){
      setCurrentQuestion(questions[index].question);
      setCurrentAnswer(questions[index].answer);
      setClicked(false);
      setAsked([...asked, index]);
      console.log(asked);
    } else {
      isIndexFull();
      setCard();
    }
  }

  const buttonClick = e => {
    if (clicked){
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <div>
      <Header as="h1">JavaScript</Header>
      <div className="card-container">
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
      <Button onClick={setCard}>New Card</Button>
    </div>
  );
}
 
export default JavaScript;