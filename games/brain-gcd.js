#!/usr/bin/env node
import taskPart from '../src/index.js';
 const getAnswer = (a, b) => {
    if (a === b) return a;

    const min = a > b ? b : a;
    let res = 0;

    for (let i = 1; i <= min; i += 1) {
        if (a % i === 0 && b % i === 0) {
            res = i;
        }
    }

    return res;
}

const brainGcd = () => {
    const task = 'Find the greatest common divisor of given numbers.';
    const questions = [];
    const answers = [];

    for (let i = 0; i < 3; i += 1) {
        let a = Math.floor(Math.random() * 50) + 1;
        let b = Math.floor(Math.random() * 50) + 1;
        let question = `${a} ${b}`;
        let answer = getAnswer(a, b);
        
        questions.push(question);
        answers.push(answer);
    }

    taskPart(task, questions, answers);
}

export default brainGcd;