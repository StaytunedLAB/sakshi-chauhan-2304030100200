var x = 10;

if (true) {
  var x = 20;  // same variable (no block scope)
}

console.log(x); // 20
