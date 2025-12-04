// 4.1 Object Basics
// Object creation and access

let user = {
  name: "Aman",// Property: name
  age: 22,// Property: age
  isStudent: true// Property: isStudent
};

console.log("Name:", user.name);// Accessing property
console.log("Age:", user.age);
console.log("Is Student:", user.isStudent);

// Add new property
user.city = "Delhi";
console.log("City:", user.city);

// Delete property
delete user.age;
console.log(user);
