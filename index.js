// Bismillahir Rahmanir Rahim

// variable

var name = 'Mafia'; // function scoped

console.log(name);

let age = 25; // block scoped

console.log(age);

const PI = 3.1416; // can't be resigned

console.log(PI);

// tips do not use var can be use let and const

// data types

let text = 'Hello'; // String

console.log(text);

let num = 43; // Number

console.log(num);

let isTru = true; // Boolean

console.log(isTru);

let person = { name: 'Alice', age: 20 }; // Object

console.log(person);

let numbers = [1, 2, 4, 5, 7, 9]; // Array

console.log(numbers);

// Conditional

let score = 85;

if (score >= 80) {
  console.log('You Are Great Result!');
} else {
  console.log('Try Again');
}

// Ternary Operator

let tr = score >= 79 ? 'You Have Passed of The Exam' : 'You are failed again';

console.log(tr);

// Loops

// For loop
for (let i = 0; i <= 10; i++) {
  console.log('number ' + i);
}

// while loop

let j = 1;

while (j <= 3) {
  console.log(j);
  j++;
}

// Functions

// regular function

function greet(msg) {
  console.log('Good Morning');
}

greet();

// arrow function

const say = (msg) => {
  return msg;
};

console.log(say('I Love Code!'));

// callback Function

// need hard explaind
function proceesUser(callback) {
  console.log('processing...');
  callback();
}

proceesUser(() => console.log('User Processed!'));

// Closures

function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter();
counter();
counter();

// Event Loop

console.log('Start');

setTimeout(() => {
  console.log('Inside Timeout');
}, 0);

console.log('End');

// Local Storage

localStorage.setItem('name', 'Jabir');
console.log(localStorage.getItem('name'));

// Todo List

let tasks = [];
function addTask(task) {
  tasks.push(task);
  console.log(`Task Added: `, task);
}

function deleteTask(index) {
  tasks.splice(index, 1);
  console.log(`Task Deleted`);
}

addTask('Learn JavaScript');
addTask('Learn coding');
deleteTask(1);
console.log(tasks);

// min & max value

let number = [4, 8, 2, 3, 9, 6, 7];

let min = number[0];
let max = number[0];

for (let i = 1; i <= number.length; i++) {
  if (number[i] < min) {
    min = number[i];
  }
  if (number[i] > max) {
    max = number[i];
  }
}

console.log(min);
console.log(max);

// function expression

const hello = function () {
  console.log('Hello');
};
hello();

// annoymous function

function helloWorld() {
  return function () {
    console.log('hello world!');
  };
}

helloWorld()();

// event handler

// const button = document.getElementById('btn');

// button.addEventListener('click', handleClick);

// function handleClick() {
//   console.log('Button Clicked!');
// }

const a = ['JS', 'Python', 'Java', 'C++'];

const b = ['HTML', 'CSS', 'JavaScript'];

const c = [...a, ...b];
console.log(c);

b.push('React');

console.log(b);
