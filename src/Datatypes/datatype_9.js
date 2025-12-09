
// WeakMap
let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, "value associated with objKey");
console.log(weakMap.get(objKey));
// WeakSet
let weakSet = new WeakSet();
let obj1 = {};
weakSet.add(obj1);
console.log(weakSet.has(obj1));

