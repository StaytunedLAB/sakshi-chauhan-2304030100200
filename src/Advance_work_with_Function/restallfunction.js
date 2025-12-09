let sum = new Function("a", "b", "return a + b;");
console.log(sum(10, 20)); // 30

//Scheduling: setTimeout & setInterval
setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 2000);

let count = 1;

let timer = setInterval(() => {
  console.log("Interval:", count);
  count++;

  if (count > 5) clearInterval(timer);
}, 1000);

// Decorators & Forwarding (call / apply)

function slow(x) {
  return x * 2;
}

function decorator(func) {
  return function(x) {
    console.log("Calling with", x);
    return func.call(this, x); // forwarding using call
  };
}

let fast = decorator(slow);
console.log(fast(5)); // 10

//Function Binding: bind
let user = {
  name: "Ravi",
  sayHi() {
    console.log(this.name);
  }
};

let boundFunc = user.sayHi.bind(user);
boundFunc(); // Ravi

// Arrow Functions Revisited
let user1knln = {
  name: "Neha",
  sayHi() {
    setTimeout(() => {
      console.log(this.name); // arrow keeps this
    }, 1000);
  }
};

user.sayHi(); // Neha (after 1 second)
