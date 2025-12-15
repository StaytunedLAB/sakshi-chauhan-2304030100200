"use strict";

// Topics: 2.1 – 2.18 | javascript.info
// 2.1 Hello, world!
alert("Hello, World!");
console.log("Hello from console");

// 2.2 Code Structure
let a = 1;
let b = 2;
console.log(a + b);

// 2.3 The modern mode: "use strict"
// Strict mode is enabled at top of file

// 2.4 Variables
let name = "Saaku";
const age = 20;
var city = "Delhi";

// 2.5 Data Types
let num = 10;           // number
let str = "JS";        // string
let isValid = true;     // boolean
let empty = null;      // null
let notDefined;         // undefined

// 2.6 Interaction: alert, prompt, confirm
// let userName = prompt("Enter your name:");
// let isSure = confirm("Are you sure?");

// 2.7 Type Conversions
let value = "123";
let convertedNumber = Number(value);
console.log(convertedNumber);

// 2.8 Basic Operators, Maths
let x = 10;
let y = 3;
console.log(x + y);
console.log(x ** y);

// 2.9 Comparisons
console.log(5 > 3);
console.log(5 === "5");

// 2.10 Conditional Branching: if, '?'
let marks = 75;
if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

// 2.11 Logical Operators
let hasID = true;
let hasTicket = false;
console.log(hasID && hasTicket);

// 2.12 Nullish Coalescing Operator ??
let user;
let defaultName = user ?? "Guest";
console.log(defaultName);

// 2.13 Loops: while and for
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

// 2.14 The "switch" statement
let day = 2;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}

// 2.15 Functions
function add(p, q) {
  return p + q;
}
console.log(add(2, 3));

// 2.16 Function Expressions
const multiply = function (m, n) {
  return m * n;
};
console.log(multiply(2, 4));

// 2.17 Arrow Functions
const subtract = (u, v) => u - v;
console.log(subtract(10, 5));

// 2.18 JavaScript Specials
// Comments, debugger, coding style
// debugger; // used for debugging
