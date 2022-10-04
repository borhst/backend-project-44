#!/usr/bin/env node
import getName from '../src/cli.js';
import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!");

const name = getName();
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let bool = true;
let count = 0;
let num = Math.floor(Math.random() * 10) + 1;

while (bool) {
    console.log(`Question: ${num}`);
    let res = readlineSync.question('Your answer: ');
    let corretRes = num % 2 === 0 ? 'yes': 'no';    
    if ((num % 2 === 0 && res.localeCompare('yes') === 0) || 
        (num % 2 != 0 && res.localeCompare('no') === 0)) {
        console.log('Correct!');
        count += 1;
        if (count === 3) {
            console.log(`Congratulations, ${name}!`);
            bool = false;
            //break;
        }
    } else {
        console.log(`'${res}' is wrong answer ;(. Correct answer was '${corretRes}'`);
        console.log(`Let's try again, ${name}!`);
        bool = false;
        //break;
    }
    num = Math.floor(Math.random() * 10) + 1;
};