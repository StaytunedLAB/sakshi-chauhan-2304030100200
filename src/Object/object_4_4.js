let user = {
  name: "Sonal",
  age: 21,

  sayHi: function () {
    console.log("Hi, my name is " + this.name);
  }
};

user.sayHi();
