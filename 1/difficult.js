const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let min = 1;
let max = 100;


console.log(`
Hey buddy,

I will try to guess your Number.

Choose one between 0 and 100.

If your number is higher, press "+",
If your number is lower, press "-",
And if i found the right one press "="

`);

function getRandomInt() {
  return Math.floor(Math.random() * (max - min)) + min;
}

function guessNumber(guess, answer) {
  if (guess !== undefined) {
    switch (answer) {
      case '-':
        max = guess - 1;
        break;
      case '+':
        min = guess + 1;
        break;
      case '=':
        console.log('I am so good!');
        rl.close();
        break;
      default:
    }
  }
  if (guess === undefined || answer === '-' || answer === '+') {
    const number = getRandomInt();
    rl.question(`My guess is ${number}, is it right?\n`, a => {
      guessNumber(number, a);
    });
  } else if (answer !== '=') {
    rl.question('What ?\n', a => {
      guessNumber(guess, a);
    });
  }
}

guessNumber();
