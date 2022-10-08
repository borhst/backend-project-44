#!/usr/bin/env node
import taskPart from '../src/index.js';

const brainProgression = () => {
    const task = 'What number is missing in the progression?';
    const questions = [];
    const answers = [];

    for (let i = 0; i < 3; i += 1) {

        let start = Math.floor(Math.random() * 10) + 1;
        let step = Math.floor(Math.random() * 10) + 1;
        let space = Math.floor(Math.random() * 9) + 1;
        
        let a = `${start}`;

        for (let j = 0; j < 10; j += 1) {
            let res = start + (j * step);
            
            if (j === 0) {
                a = `${res}`;
                continue;
            }
            if (j === space) {
                a = `${a} ..`;
                answers.push(res);
                continue;
            }
            
            a = `${a} ${res}`;
        }

        let question = `${a}`;
       
        questions.push(question);

    }

    taskPart(task, questions, answers);
}

export default brainProgression;