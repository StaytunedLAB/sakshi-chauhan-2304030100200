// Reference vs Real Copy

let user = {
  name: "Rohit"
};

// Reference copy
let admin = user;
admin.name = "Admin";

console.log("User name:", user.name); // Admin (same reference)

// Real copy using Object.assign
let student = {
  name: "Neha",
  age: 20
};

let copy = Object.assign({}, student);
copy.name = "Priya";

console.log("Original:", student.name); // Neha
console.log("Copy:", copy.name);        // Priya
