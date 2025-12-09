let sayHi = function hello(name) {
  console.log("Hello", name);
};

sayHi("Aman");  
// hello("Aman"); // ❌ Error: only available inside the function
// The function name 'hello' is not accessible outside its own body.