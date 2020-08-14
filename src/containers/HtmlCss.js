import React from 'react'
import FlashCard from './FlashCard'

const HtmlCss = () => {
  const questions = [
    {
      question: 'What are the 3 ways to integrate CSS?',
      answer:
        'Inline -> written as a part of the HTML element. External -> separate CSS file that is linked in the HTML. Internal -> written in a style tag inside the head element.',
    },
    {
      question: 'Describe the difference between margin and padding...',
      answer:
        'Margin is the transparent space outside the border. Padding is the transparent space inside the border surrounding the content.',
    },
    {
      question: 'What is the z-index?',
      answer:
        'The z-index helps specify the stack order of positioned elements that may overlap one another. Default value is zero and it can take either a positive or negative number.',
    },
    {
      question: 'What are media queries?',
      answer:
        'Media queries are rules that apply different styles for different media types/devices. Media queries can be used to check things, like: width/height of viewport, width/height of device, orientation, and resolution.',
    },
    {
      question: 'Describe the 3 levels of CSS specificity...',
      answer:
        'From the top: 1) Type selectors and pseudo-elements.  2) Class selectors, attribute selectors, and pseudo classes.  3) ID selectors.',
    },
    {
      question: 'What does HTML stand for?',
      answer: 'Hyper Text Markup Language',
    },
    {
      question: 'What does CSS stand for?',
      answer: 'Cascading Style Sheet',
    },
    {
      question: 'What is semantic HTML?',
      answer:
        'A style that is more descriptive. Ex. Using <strong /> and <em /> instead of <b /> and <i />',
    },
    {
      question: 'What is the iframe tag used for?',
      answer: 'An iframe is used to display a web page within a web page.',
    },
    {
      question: 'What is Bootstrap?',
      answer:
        'Bootstrap is CSS/Javascript framework for building the rich web applications with minimal effort. This framework emphasis more on building mobile web applications.',
    },
    {
      question: 'What is a CSS preprocessor?',
      answer:
        "A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax.",
    },
  ]

  return (
    <div>
      <FlashCard subject={'HTML/CSS'} questions={questions} />
    </div>
  )
}

export default HtmlCss
