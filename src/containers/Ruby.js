import React, {useState, useEffect} from 'react';
import { Header, Card, Button } from 'semantic-ui-react';

const Ruby = () => {
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [clicked, setClicked] = useState(false);
  const [asked, setAsked] = useState([]);
  const questions = [
    {
      question: 'What is the difference between a class and a module?',
      answer: 'A module is a collection of methods and constants, but it cannot generate instances. A class may inherit from another class, but not from a module. A module may not inherit from anything.'
    },
    {
      question: 'What is an Object',
      answer: 'Everything in Ruby is an object.'
    },
    {
      question: 'What is the "self" keyword',
      answer: '"Self" refers to the object that is currently in context.'
    },
    {
      question: 'What is a Ruby Gem?',
      answer: 'A packaged Ruby application that contains: Code, Documentation, and a gemspec.'
    },
    {
      question: 'What is a Gemfile?',
      answer: 'A file which is used for describing gem dependencies for Ruby programs.'
    },
    {
      question: 'Describe the .gemspec file...',
      answer: 'It specifies the information about a gem such as its name, version, description, authors, and homepage.'
    },
    {
      question: 'What does CRUD stand for?',
      answer: 'Create, Read, Update, Delete'
    },
    {
      question: 'Describe the CRUD actions in Ruby...',
      answer: '1) GET path=/toys controller#action=toys#index - display a list of all toys  2) GET path=/toys/new controller#action=toys#new - return an HTML form for creating a new toy  3) POST path=/toys controller#action=toys#create - create a new toy  4) GET path=/toys/:id controller#action=toys#show - display a specific toy  5) GET path=/toys/:id/edit controller#action=toys#edit - return an HTML form for editing a toy  6) PATCH/PUT path=/toys/:id controller#action=toys#update - update a specific photo  7) DELETE path=/toys/:id controller#action=toys#destroy - delete a specific photo'
    },
    {
      question: 'What is Active Record?',
      answer: 'The model in MVC. Objects carry both persistent data and behavior which operates on that data.'
    },
    {
      question: 'What is ORM?',
      answer: 'Object Relational Mapping. A technique that connects the rich objects of an application to tables in a relational database management system.'
    },
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
      question: 'What is Rails?',
      answer: 'A framework used for building a web application.'
    },
    {
      question: 'What are Symbols?',
      answer: 'A given symbol name refers to the same object throughout a Ruby program. Symbols are immutable.'
    },
    {
      question: 'What is Sinatra?',
      answer: 'Sinatra is a Domain Specific Language (DSL) for quickly creating web applications in Ruby with minimal effort.'
    },
    {
      question: 'What are Restful Routes?',
      answer: 'A set of principles that provide a way of mapping HTTP verbs and CRUD actions.'
    }
  ]

  useEffect(() => {
    setCard();
  },[]);

  const isIndexFull = () => {
    if (asked.length >= (questions.length - 1)){
      return true;
    } else {
      return false;
    }
  }

  const setCard = () => {  
    isIndexFull();
    const index = Math.floor(Math.random() * questions.length);
    if (!asked.includes(index)){
      setCurrentQuestion(questions[index].question);
      setCurrentAnswer(questions[index].answer);
      setClicked(false);
      if (isIndexFull()){
        setAsked([]);
      } else {
        setAsked([...asked, index]);
      }
    } else {
      setCard();
    }
  }

  const buttonClick = e => {
    if (clicked){
      setClicked(false);
    } else {
      setClicked(true);
    }
  }

  return (
    <div>
      <Header as="h1">Ruby</Header>
      <div className="card-container">
        <Card>
          <Card.Content>
            <Card.Header>{currentQuestion}</Card.Header>
            <Card.Description>
              {!clicked && <Button onClick={buttonClick}>See Answer</Button>}
              {clicked && currentAnswer}
            </Card.Description>
          </Card.Content>
        </Card>
      </div>
      <Button onClick={setCard}>New Card</Button>
    </div>
  );
}
 
export default Ruby;