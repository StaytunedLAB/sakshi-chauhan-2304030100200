// JSON.stringify() - Object to JSON string
let user = {
  name: "Rahul",
  age: 24,
  city: "Delhi"
};


let jsonData = JSON.stringify(user);
console.log("JSON String:", jsonData);

// JSON.parse() - JSON string to Object
let parsedObject = JSON.parse(jsonData);
console.log("Parsed Object:", parsedObject);

// toJSON() custom method
let student = {
  name: "Anita",
  marks: 85,

  toJSON() {
    return {
      name: this.name,
      status: this.marks >= 40 ? "Pass" : "Fail"
    };
  }
};

let studentJSON = JSON.stringify(student);
console.log("Custom toJSON Output:", studentJSON);
let parsedStudent = JSON.parse(studentJSON);
console.log("Parsed Student Object:", parsedStudent);
// Reviver function in JSON.parse()
let data = '{"name":"Vikram","age":"30","isStudent":"false"}';
let parsedData = JSON.parse(data, (key, value) => {
    if (key === "age") {
        return Number(value);
    }
    if (key === "isStudent") {
        return value === "true";
    }
    return value;
});
console.log("Parsed Data with Reviver:", parsedData);
// Replacer function in JSON.stringify()
let employee = {
  name: "Sonia",
  position: "Developer",
  salary: 50000
};
let jsonString = JSON.stringify(employee, (key, value) => {
    if (key === "salary") {
        return undefined; // Exclude salary from JSON
    }
    return value;
});
console.log("JSON String with Replacer:", jsonString);
// Pretty-printing JSON
let product = {
  id: 101,
    name: "Laptop",
    price: 75000,
    features: {
        ram: "16GB",
        storage: "512GB SSD"
    }
};
let prettyJSON = JSON.stringify(product, null, 4);
console.log("Pretty-printed JSON:\n", prettyJSON);
// Handling circular references
let circleObj = {};
circleObj.self = circleObj;
try {
    let circularJSON = JSON.stringify(circleObj);
    console.log("Circular JSON:", circularJSON);
}
catch (error) {
    console.log("Error stringifying circular object:", error.message);
}
// Using a library like flatted to handle circular references
// (Assuming flatted is installed via npm)
// const { stringify, parse } = require('flatted');
// let circularJSON = stringify(circleObj);
// console.log("Circular JSON with flatted:", circularJSON);
// let parsedCircle = parse(circularJSON);
// console.log("Parsed Circular Object with flatted:", parsedCircle);
// Output:
// JSON String: {"name":"Rahul","age":24,"city":"Delhi"}

// Parsed Object: { name: 'Rahul', age: 24, city: 'Delhi' }
// Custom toJSON Output: {"name":"Anita","status":"Pass"}
// Parsed Student Object: { name: 'Anita', status: 'Pass' }
// Parsed Data with Reviver: { name: 'Vikram', age: 30, isStudent: false }
// JSON String with Replacer: {"name":"Sonia","position":"Developer