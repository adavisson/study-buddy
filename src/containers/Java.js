import React from 'react'
import FlashCard from './FlashCard'

const Java = () => {
  const questions = [
    {
      question: 'List the three steps for creating an Object for a class.',
      answer:
        'An Object is first declared, then instantiated, and then initialize',
    },
    {
      question: 'What is a class variable?',
      answer:
        'A variable declared in a class with the static keyword, but outside any method.',
    },
    {
      question: 'What is the "this" keyword in Java?',
      answer:
        'Within an instance method or constructor, "this" is a reference to the current object.',
    },
    {
      question: 'What does "JVM" stand for and what is it?',
      answer:
        'A Java Virtual Machine is responsible for converting byte code into machine readable code.',
    },
    {
      question: 'Which class is the superclass of all other classes?',
      answer: 'java.lang.Object',
    },
    {
      question: 'What is method overloading?',
      answer:
        'When you have more than one method with the same name in a single class, but the arguments are different.',
    },
    {
      question: 'What is the "final" keyword?',
      answer:
        'The "final" keyword is used in classes to make sure no other class can extend it. It is used for methods to make sure that child classes can not override it. It is used with variables to make sure that they can only be assigned once.',
    },
  ]

  return (
    <div>
      <FlashCard subject={'Java'} questions={questions} />
    </div>
  )
}

export default Java
