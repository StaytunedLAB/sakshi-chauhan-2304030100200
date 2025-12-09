// Callback function
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

console.log(calculate(10, 5, add));

// Arrow function
let multiply = (x, y) => x * y;
console.log(multiply(4, 5));

// Closure
function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter();
counter();
counter();