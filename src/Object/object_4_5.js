function User(name, age) {
  this.name = name;
  this.age = age;
}

let user1 = new User("Rahul", 23);
let user2 = new User("Karan", 25);

console.log(user1);
console.log(user2);
console.log("User1 Name:", user1.name);
console.log("User2 Age:", user2.age);