import React from 'react';
import FlashCard from './FlashCard';

const Testing = () => {
  const questions = [
    {
      question: 'What is Unit Testing?',
      answer: 'Testing individual units/components of a software.'
    },
    {
      question: 'What is Integration Testing?',
      answer: 'Testing groups of combined individual units.'
    },
    {
      question: 'What is System Testing?',
      answer: 'Testing that validates the complete and fully integrated software product.'
    }
  ]

  return (
    <div>
      <FlashCard subject={Testing} questions={questions} />
    </div>
  );
}
 
export default Testing;