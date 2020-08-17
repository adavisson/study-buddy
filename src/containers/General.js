import React from 'react'
import FlashCard from './FlashCard'

const General = () => {
  const questions = [
    {
      question: 'What is ORM?',
      answer:
        'Object Relational Mapping. A technique that connects the rich objects of an application to tables in a relational database management system.',
    },
    {
      question: 'What is DRY?',
      answer:
        'Don’t Repeat Yourself. DRY code lacks redundancy and repetition.',
    },
    {
      question: 'What is Code Smell?',
      answer:
        'Any characteristic in the source code of a program that possibly indicates a deeper problem.',
    },
    {
      question: 'What are Restful Routes?',
      answer:
        'A set of principles that provide a way of mapping HTTP verbs and CRUD actions.',
    },
    {
      question: 'What does the acronym SOLID stand for?',
      answer:
        'S - Single Responsibility Principle, O - Open-closed Principle, L - Liskov Substitution Principle, I - Interface Segregation Principle, D - Dependency Inversion Principle',
    },
    {
      question: 'Explain the Single Responsibility Principle.',
      answer:
        'Every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class, module, or funtion.',
    },
    {
      question: 'Explain the Open-closed Principle.',
      answer:
        'Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.',
    },
    {
      question: 'Explain the Liskov Substitution Principle.',
      answer:
        'If "S" is a subtype of "T", then objects of type "T" in a program may be replaced with objects of type "S" without altering any of the desirable properties of that program.',
    },
    {
      question: 'Explain the Interface Segregation Principle.',
      answer:
        'No client should be forced to rely on methods that it does not use.',
    },
    {
      question: 'Explain the Dependency Inversion Principle.',
      answer:
        'A. High-level modules should not depend on low-level modules. Both should depend on abstractions (e.g. interfaces). B. Abstractions should not depend on details. Details (concrete implementations) should depend on abstractions.',
    },
    {
      question: 'Explain the difference between composition and inheritance.',
      answer: 'Inheritance is a "is-a" relationship, where Composition is a "has-a" relationship.'
    },
    {
      question: 'What are the four principles of Object-Oriented programming?',
      answer: 'Encapsulation, Data Abstraction, Polymorphism, Inheritance'
    },
    {
      question: 'Explain encapsulation as it relates to Object-Oriented programming.',
      answer: 'Encapsulation is the mechanism of hiding data by restricting access to private variables through public accessor methods.'
    },
    {
      question: 'Explain Abstraction as it relates to Object-Oriented programming.',
      answer: 'The idea that one class should not need to know about the inner details of another in order to use it, just knowing the interfaces should be enough.'
    },
    {
      question: 'Explain Inheritance as it relates to Object-Oriented programming.',
      answer: 'Inheritance expresses an "is-a" relationship. Allows classes to reuse code from an existing super class.'
    },
    {
      question: 'Explain Polymorphism as it relates to Object-Oriented programming.',
      answer: 'Polymorphism means one name many forms. Static polymorphism is achieved through method overloading and dynamic polymorphism is achieved through method overriding.'
    }
  ]

  return (
    <div>
      <FlashCard subject={'General Programming'} questions={questions} />
    </div>
  )
}

export default General
