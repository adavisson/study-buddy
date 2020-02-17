import React from 'react';
import FlashCard from './FlashCard';

const General = () => {
  const questions = [
    {
      question: 'What is ORM?',
      answer: 'Object Relational Mapping. A technique that connects the rich objects of an application to tables in a relational database management system.'
    },
    {
      question: 'What is DRY?',
      answer: 'Don’t Repeat Yourself. DRY code lacks redundancy and repetition.'
    },
    {
      question: 'What is Code Smell?',
      answer: 'Any characteristic in the source code of a program that possibly indicates a deeper problem.'
    },
    {
      question: 'What are Restful Routes?',
      answer: 'A set of principles that provide a way of mapping HTTP verbs and CRUD actions.'
    }
  ]

  return (
    <div>
      <FlashCard subject={"General Programming"} questions={questions} />
    </div>
  );
}
 
export default General;