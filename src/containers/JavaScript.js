import React from 'react';
import FlashCard from './FlashCard';

const JavaScript = () => {
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
    }
  ]

  return (
    <div>
      <FlashCard subject={"JavaScript"} questions={questions} />
    </div>
  );
}
 
export default JavaScript;