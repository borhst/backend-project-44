#!/usr/bin/env node
import taskPart from '../src/index.js';

const getAnswer = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return 'undefined';
  }
};

const brainCalc = () => {
  const task = 'What is the result of the expression?';
  const questions = [];
  const answers = [];
  const operations = ['+', '-', '*'];

  for (let i = 0; i < 3; i += 1) {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const operation = operations[Math.floor(Math.random() * 3)];
    const question = `${a} ${operation} ${b}`;
    const answer = getAnswer(a, b, operation);

    questions.push(question);
    answers.push(answer);
  }

  taskPart(task, questions, answers);
};

export default brainCalc;
