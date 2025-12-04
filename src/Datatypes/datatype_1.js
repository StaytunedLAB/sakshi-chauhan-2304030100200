// ===============================
// BASIC DATA TYPES
// ===============================
let num = 10;                 // Number
let str = "Hello";            // String
let bool = true;             // Boolean
let undef;                   // Undefined
let nul = null;              // Null
let obj = { name: "Aman" };  // Object
let arr = [1, 2, 3];         // Array

console.log("---- typeof checks ----");
console.log(typeof num);    // number
console.log(typeof str);    // string
console.log(typeof bool);   // boolean
console.log(typeof undef);  // undefined
console.log(typeof nul);    // object (JS bug)
console.log(typeof obj);    // object
console.log(typeof arr);    // object

// ===============================
// ARRAY CHECK (Correct Way)
// ===============================
console.log("---- Array Checks ----");
console.log(Array.isArray(arr));      // true ✅ best method
console.log(arr instanceof Array);   // true

// ===============================
// OBJECT CHECK
// ===============================
console.log("---- Object Check ----");
console.log(obj instanceof Object);  // true

// ===============================
// FUNCTION TYPE
// ===============================
console.log("---- Function Check ----");
function demo() {}
console.log(typeof demo);                // function
console.log(demo instanceof Function);  // true

// ===============================
// SYMBOL TYPE
// ===============================
console.log("---- Symbol Check ----");
let sym = Symbol("id");
console.log(typeof sym);   // symbol

// ===============================
// BIGINT TYPE
// ===============================
console.log("---- BigInt Check ----");
let big = 12345678901234567890n;
console.log(typeof big);  // bigint

// ===============================
// NaN & Infinity
// ===============================
console.log("---- NaN & Infinity ----");
console.log(typeof NaN);        // number
console.log(isNaN(NaN));       // true

console.log(typeof Infinity);  // number
console.log(isFinite(Infinity)); // false
console.log(isFinite(100));      // true

// ===============================
// DATE CHECK (Correct Way)
// ===============================
console.log("---- Date Check ----");
let date = new Date();
console.log(typeof date);          // object
console.log(date instanceof Date); // true

// ===============================
// REGULAR EXPRESSION
// ===============================
console.log("---- RegExp Check ----");
let regex = /abc/;
console.log(typeof regex);              // object
console.log(regex instanceof RegExp);  // true

// ===============================
// BUILT-IN OBJECTS
// ===============================
console.log("---- Built-in Objects ----");
console.log(typeof Math);   // object
console.log(Math instanceof Object); // true

console.log(typeof JSON);   // object
console.log(JSON instanceof Object); // true
