let student = {
  name: "Neha",
  age: 21,
  course: "BCA"
};

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
console.log(Object.assign({}, student, { grade: "A" }));
console.log(Object.freeze(student));
student.age = 22;
console.log(student);
console.log(Object.isFrozen(student));
console.log(Object.seal(student));
student.name = "Anita";
student.city = "Delhi";
console.log(student);
console.log(Object.isSealed(student));