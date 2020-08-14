import React from 'react'
import FlashCard from './FlashCard'

const ReactRedux = () => {
  const questions = [
    {
      question: 'Explain the Virtual DOM...',
      answer:
        'When components rerender, the virtual DOM is updated, a diff is performed between the virtual DOM and the DOM, and then the HTML DOM only changes the updated elements instead of rerendering the whole DOM.',
    },
    {
      question: 'What is a Stateless Component?',
      answer: 'Does not have state, but receives props.',
    },
    {
      question: 'Describe the 3 Principles of Redux...',
      answer:
        '1) The state of the whole application is stored in an object tree within a single store. 2) The only way to change the state is to emit an action. 3) Changes are made with pure functions.',
    },
    {
      question: 'What are the 3 parts of Redux?',
      answer: '1) Actions 2)Reducers 3)Store',
    },
    {
      question: 'What are Redux Actions?',
      answer: 'Events that send data from the application to the store.',
    },
    {
      question: 'What are Redux Reducers?',
      answer:
        'Pure functions that take the current state of the application and an action, and then return a new state.',
    },
    {
      question: 'What is the Redux Store?',
      answer:
        'The object that holds the application state and provides a few helper methods to access the state, dispatch actions, and register listeners.',
    },
    {
      question: 'What is a Stateful Component?',
      answer: 'Depends on its own state and can change that state.',
    },
    {
      question: 'List the lifecycle methods and explain them.',
      answer: 'Mount: constructor(), static getDerivedStateFromProps(), render(), componentDidMount(). Updating: static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate(). Unmount: componentWillUnmount(). Error Handling: static getDerivedStateFromError(), componentDidCatch().'
    },
    {
      question: 'What are React hooks?',
      answer: 'A feature introduced in React 16.8 that allows you to use state and other features in functional components. No longer need class components.'
    },
    {
      question: 'List the 3 basic React hooks.',
      answer: 'useState, useEffect, useContext'
    }
  ]

  return (
    <div>
      <FlashCard subject={'React/Redux'} questions={questions} />
    </div>
  )
}

export default ReactRedux
