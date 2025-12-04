let numbers = [1, 2, 3, 4, 5];

numbers.push(6);
numbers.pop();

let doubled = numbers.map(n => n * 2);
let even = numbers.filter(n => n % 2 === 0);

console.log(numbers);
console.log(doubled);
console.log(even);
