#!/usr/bin/env node
import taskPart from '../src/index.js';

const brainEven = () => {
  const task = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = [];
  const answers = [];

  for (let i = 0; i < 3; i += 1) {
    const question = Math.floor(Math.random() * 10) + 1;
    const answer = question % 2 === 0 ? 'yes' : 'no';
    questions.push(question);
    answers.push(answer);
  }

  taskPart(task, questions, answers);
};
export default brainEven;
