const { add, subtract, multiply, divide } = require("./calculator");

console.log("Addition: ", add(5, 3));
console.log("Subtraction: ", subtract(5, 3));
console.log("Multiplication: ", multiply(5, 3));
console.log("Division: ", divide(5, 0));

// ES Module Import
// import { add, subtract, multiply, divide } from './calculator.js';

// console.log("Addition: ", add(5, 3));
// console.log("Subtraction: ", subtract(5, 3));
// console.log("Multiplication: ", multiply(5, 3));
// console.log("Division: ", divide(5, 0));
