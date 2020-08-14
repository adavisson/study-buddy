import React from 'react'
import FlashCard from './FlashCard'

const Ruby = () => {
  const questions = [
    {
      question: 'What is the difference between a class and a module?',
      answer:
        'A module is a collection of methods and constants, but it cannot generate instances. A class may inherit from another class, but not from a module. A module may not inherit from anything.',
    },
    {
      question: 'What is an Object in Ruby?',
      answer: 'Everything in Ruby is an object.',
    },
    {
      question: 'What is the "self" keyword?',
      answer: '"Self" refers to the object that is currently in context.',
    },
    {
      question: 'What is a Ruby Gem?',
      answer:
        'A packaged Ruby application that contains: Code, Documentation, and a gemspec.',
    },
    {
      question: 'What is a Gemfile?',
      answer:
        'A file which is used for describing gem dependencies for Ruby programs.',
    },
    {
      question: 'Describe the .gemspec file...',
      answer:
        'It specifies the information about a gem such as its name, version, description, authors, and homepage.',
    },
    {
      question: 'What does CRUD stand for?',
      answer: 'Create, Read, Update, Delete',
    },
    {
      question: 'Describe the CRUD actions in Ruby...',
      answer:
        '1) GET path=/toys controller#action=toys#index - display a list of all toys  2) GET path=/toys/new controller#action=toys#new - return an HTML form for creating a new toy  3) POST path=/toys controller#action=toys#create - create a new toy  4) GET path=/toys/:id controller#action=toys#show - display a specific toy  5) GET path=/toys/:id/edit controller#action=toys#edit - return an HTML form for editing a toy  6) PATCH/PUT path=/toys/:id controller#action=toys#update - update a specific photo  7) DELETE path=/toys/:id controller#action=toys#destroy - delete a specific photo',
    },
    {
      question: 'What is Active Record?',
      answer:
        'The model in MVC. Objects carry both persistent data and behavior which operates on that data.',
    },
    {
      question: 'What is Rails?',
      answer: 'A framework used for building a web application.',
    },
    {
      question: 'What are Symbols?',
      answer:
        'A given symbol name refers to the same object throughout a Ruby program. Symbols are immutable.',
    },
    {
      question: 'What is Sinatra?',
      answer:
        'Sinatra is a Domain Specific Language (DSL) for quickly creating web applications in Ruby with minimal effort.',
    },
  ]

  return (
    <div>
      <FlashCard subject={'Ruby'} questions={questions} />
    </div>
  )
}

export default Ruby
