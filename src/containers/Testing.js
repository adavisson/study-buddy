import React from 'react'
import FlashCard from './FlashCard'

const Testing = () => {
  const questions = [
    {
      question: 'What is Unit Testing?',
      answer: 'Testing individual units/components of a software.',
    },
    {
      question: 'What is Integration Testing?',
      answer: 'Testing groups of combined individual units.',
    },
    {
      question: 'What is System Testing?',
      answer:
        'Testing that validates the complete and fully integrated software product.',
    },
    {
      question: 'Describe TDD...',
      answer:
        'Test-Driven Development is where you write your tests before writing your code. Helps your functionality conform to requirements and discourages opinionated code/tests.',
    },
    {
      question: 'When using Mocha, what does "describe" do?',
      answer: '"describe" defines a group of tests.',
    },
    {
      question: 'When using Mocha, what does "it" do?',
      answer: '"it" defines a single test.',
    },
    {
      question: 'When using Mocha, what does "before" do?',
      answer:
        '"before" goes inside "describe" and runs before ANY tests in that group.',
    },
    {
      question: 'When using Mocha, what does "beforeEach" do?',
      answer:
        '"beforeEach" goes inside "describe" and runs before EVERY test in that group. Can be very expensive.',
    },
    {
      question: 'When using Mocha, what does "after" do?',
      answer:
        '"after" goes inside "describe" and runs after ANY tests in that group.',
    },
    {
      question: 'When using Mocha, what does "afterEach" do?',
      answer:
        '"afterEach" goes inside "describe" and runs after EVERY test in that group. Can be very expensive',
    },
    {
      question: 'What is Chai?',
      answer:
        'Chai is an assertion library. An assertion evaluates that a condition is true.',
    },
    {
      question: 'What is Mocha?',
      answer: 'Mocha is a test runner.',
    },
  ]

  return (
    <div>
      <FlashCard subject={'Testing'} questions={questions} />
    </div>
  )
}

export default Testing
