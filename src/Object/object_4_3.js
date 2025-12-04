let person = {
  name: "Amit"
};

console.log(person.name);

// Now object has no reference
person = null;

// JS automatically removes it from memory (Garbage Collection)
console.log("Object removed from memory by GC");
