const { greet } = require('./utils');
const { farewell } = require('./utils');

const name = 'Alice';
console.log(farewell(name)); 
console.log(greet(name));
