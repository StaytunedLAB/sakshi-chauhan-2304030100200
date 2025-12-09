/* =========================
   ALL-IN-ONE JAVASCRIPT FILE
   ========================= */

/* 1) Property Descriptors */
const obj = { a: 1 };
Object.defineProperty(obj, "a", {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: false
});
console.log(Object.getOwnPropertyDescriptor(obj, "a"));

/* 2) Getters & Setters */
const user = {
  first: "Amit",
  last: "Shah",
  get fullName() {
    return this.first + " " + this.last;
  },
  set fullName(v) {
    [this.first, this.last] = v.split(" ");
  }
};
console.log(user.fullName);
user.fullName = "Rahul Gandhi";
console.log(user.first, user.last);

/* 3) Prototypes & Inheritance */
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return this.name + " makes noise";
};
const dog = new Animal("Dog");
console.log(dog.speak());

const dict = Object.create(null);
dict.key = "value";
console.log(dict);

/* 4) Classes */
class Person {
  #ssn;
  constructor(name, ssn) {
    this.name = name;
    this.#ssn = ssn;
  }
  greet() {
    return "Hi " + this.name;
  }
  getSSN() {
    return this.#ssn;
  }
  static type = "Human";
}

class Employee extends Person {
  constructor(name, ssn, role) {
    super(name, ssn);
    this.role = role;
  }
}

const emp = new Employee("Aman", "123", "Dev");
console.log(emp.greet(), Person.type);

class MyArray extends Array {
  first() {
    return this[0];
  }
}
const arr = new MyArray(10, 20, 30);
console.log(arr.first());

/* 5) instanceof */
console.log(emp instanceof Employee);
console.log(emp instanceof Person);

/* 6) Mixins */
const Logger = {
  log(msg) {
    console.log("LOG:", msg);
  }
};
Object.assign(Person.prototype, Logger);
emp.log("Hello");

/* 7) Error Handling */
class MyError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "MyError";
  }
}

try {
  throw new MyError("Something wrong");
} catch (e) {
  console.log(e.name, e.message);
}

/* 8) Callback to Promise */
function asyncCB(x, cb) {
  setTimeout(() => cb(null, x * 2), 100);
}

function promisify(fn) {
  return (...args) =>
    new Promise((res, rej) => {
      fn(...args, (err, data) => {
        if (err) rej(err);
        else res(data);
      });
    });
}

const asyncP = promisify(asyncCB);
asyncP(5).then(console.log);

/* 9) Promises & Microtasks */
console.log("start");
Promise.resolve().then(() => console.log("microtask"));
setTimeout(() => console.log("macrotask"), 0);
console.log("end");

/* 10) Async / Await */
async function demo() {
  const r = await asyncP(10);
  console.log("await:", r);
}
demo();

/* 11) Generators */
function* gen() {
  yield 1;
  yield 2;
}
const g = gen();
console.log(g.next().value);
console.log(g.next().value);

/* Async Generator */
async function* agen() {
  yield await Promise.resolve("A");
  yield await Promise.resolve("B");
}
(async () => {
  for await (let v of agen()) console.log(v);
})();

/* 12) Proxy & Reflect */
const target = { x: 5 };
const proxy = new Proxy(target, {
  get(t, p) {
    return p in t ? t[p] : 0;
  },
  set(t, p, v) {
    return Reflect.set(t, p, v);
  }
});
console.log(proxy.y);
proxy.x = 50;

/* 13) eval */
console.log(eval("2 + 3"));

/* 14) Currying */
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3));

/* 15) Reference Type */
const box = {
  value: 100,
  get() {
    return this.value;
  }
};
const f = box.get;
console.log(f.bind(box)());

/* 16) BigInt */
const big = 12345678901234567890n;
console.log(big + 1n);

/* 17) Unicode */
const str = "A😀B";
console.log(str.length);
console.log(Array.from(str).length);

/* 18) WeakRef */
if (typeof WeakRef !== "undefined") {
  let obj2 = { name: "temp" };
  const ref = new WeakRef(obj2);
  const reg = new FinalizationRegistry(val => {
    console.log("finalized:", val);
  });
  reg.register(obj2, "obj2");
  obj2 = null;
}
