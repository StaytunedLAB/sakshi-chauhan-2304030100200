// In Node.js: global
// In browser: window

global.myValue = 100;
console.log(global.myValue); // 100

// Global function
function test() {}
console.log(global.test === test); // true
