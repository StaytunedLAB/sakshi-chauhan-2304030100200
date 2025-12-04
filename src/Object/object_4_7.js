let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // false (symbols are always unique)

let user = {
  name: "Ritika",
  [id1]: 101
};

console.log(user[id1]);
console.log(user[id2]); // undefined (different symbol)
