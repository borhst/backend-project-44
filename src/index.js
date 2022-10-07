import getName from '../src/cli.js';
import readlineSync from 'readline-sync';

const taskPart = (task, questions, answers) => {
   const rounds = 3;

   // greeting

   console.log("Welcome to the Brain Games!");

   const name = getName();
   console.log(`Hello, ${name}!`);

   // task
   
   console.log(task);

   let i = 0;
   for (i; i < rounds; i += 1) {
      console.log(`Question: ${questions[i]}`); 
      let res = readlineSync.question('Your answer: ');
      if (res === answers[i] || Number(res) === answers[i]) {
         console.log('Correct!');
         //i += 1;
         if (i === rounds - 1) {
            console.log(`Congratulations, ${name}!`);
         }
      } else {
         console.log(`'${res}' is wrong answer ;(. Correct answer was '${answers[i]}'`);
         console.log(`Let's try again, ${name}!`);
		   break;
      }
   }
}

export default taskPart;