function outer() {
  let count = 0; // outer variable

  function inner() {
    count++;     // remembers outer variable
    console.log(count);
  }

  return inner;
}

let counter = outer();
counter(); // 1
counter(); // 2
