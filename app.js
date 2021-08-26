// import functions
import { add } from './calculator.js'; 
import { subtract } from './calculator.js';
import { multiply } from './calculator.js';
// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');
// Subtract
const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');
//Multiply
const multNumber1 = document.getElementById('mult-number-1');
const multNumber2 = document.getElementById('mult-number-2');
const multButton = document.getElementById('mult-button');
const multAnswer = document.getElementById('mult-answer');


// set event listeners 
addButton.addEventListener('click', () => {
    const num1 = Number(addNumber1.value);
    const num2 = Number(addNumber2.value);
    // get user input(s)
    // do any needed work with the value(s)
    const sum = add(num1, num2);
    // update DOM to reflect new value(s)
    addAnswer.textContent = sum;
});

subButton.addEventListener('click', () => {
    const num3 = Number(subNumber1.value);
    const num4 = Number(subNumber2.value);
    const sum1 = subtract(num3, num4);
    subAnswer.textContent = sum1;
});

multButton.addEventListener('click', () => {
    const num5 = Number(multNumber1.value);
    const num6 = Number(multNumber2.value);
    const sum2 = multiply(num5, num6);
    multAnswer.textContent = sum2;
});