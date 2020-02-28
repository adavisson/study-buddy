import React from 'react';
import FlashCard from './FlashCard';

const Java = () => {
  const questions = [
    {
      question: "Question",
      answer: "Answer"
    }
  ]

  return (
    <div>
      <FlashCard subject={"Java"} questions={questions} />
    </div>
  );
}
 
export default Java;