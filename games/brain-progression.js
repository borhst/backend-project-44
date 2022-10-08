#!/usr/bin/env node
import taskPart from '../src/index.js';

const brainProgression = () => {
  const task = 'What number is missing in the progression?';
  const questions = [];
  const answers = [];

  for (let i = 0; i < 3; i += 1) {
    const start = Math.floor(Math.random() * 10) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    const space = Math.floor(Math.random() * 9) + 1;

    let a = `${start}`;

    for (let j = 0; j < 10; j += 1) {
      const res = start + (j * step);

      if (j === 0) {
        a = `${res}`;
        // continue;
      } else if (j === space) {
        a = `${a} ..`;
        answers.push(res);
        // continue;
      }

      a = `${a} ${res}`;
    }

    const question = `${a}`;

    questions.push(question);
  }

  taskPart(task, questions, answers);
};

export default brainProgression;
