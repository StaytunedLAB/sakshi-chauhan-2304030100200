let user = {
  name: "Deepak",
  money: 1000,

  valueOf() {
    return this.money;
  },

  toString() {
    return this.name;
  }
};

console.log(user + 500);   // 1500
console.log(String(user)); // Deepak
console.log(user);        // {name: "Deepak", money: 1000}
