#!/usr/bin/env node
import taskPart from '../src/index.js';

const brainPrime = () => {
  const task = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  const questions = [];
  const answers = [];

  for (let i = 0; i < 3; i += 1) {
    const question = Math.floor(Math.random() * 100) + 2;
    questions.push(question);

    for (let j = 2; j <= question; j += 1) {
      if (question === j) {
        answers.push('yes');
        break;
      } else if (question % j === 0) {
        answers.push('no');
        break;
      }
    }
  }

  taskPart(task, questions, answers);
};

export default brainPrime;
