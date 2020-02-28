import React from 'react';
import FlashCard from './FlashCard';

const Java = () => {
  const questions = [
    {
      question: 'List the three steps for creating an Object for a class.',
      answer: 'An Object is first declared, then instantiated, and then initialize'
    },
    {
      question: 'What is a class variable?',
      answer: 'A variable declared in a class with the static keyword, but outside any method.'
    },
    {
      question: 'What is the "this" keyword in Java?',
      answer: 'Within an instance method or constructor, "this" is a reference to the current object.'
    }
  ]

  return (
    <div>
      <FlashCard subject={"Java"} questions={questions} />
    </div>
  );
}
 
export default Java;