const { prompt } = require('../dist');
const response = prompt('What is your name?', { char: '-', hide: true });

console.log(`Your name is: ${response}`);
