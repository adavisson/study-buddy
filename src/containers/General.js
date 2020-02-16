import React from 'react';
import FlashCard from './FlashCard';

const General = () => {
  const questions = [
    {
      question: "Who are you?",
      answer: "Andrew"
    }
  ]

  return (
    <div>
      <FlashCard subject={"General Programming"} questions={questions} />
    </div>
  );
}
 
export default General;