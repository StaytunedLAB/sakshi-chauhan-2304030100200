let user = { name: "Saaku", age: 19 };
let user2 = { name: "Saaku", age: 19 };

// Check if user and user2 are the same object
console.log(user === user2); // false   
// Check if user and user2 have the same properties and values
console.log(JSON.stringify(user) === JSON.stringify(user2)); // true

// Check if user and user2 are the same object reference
console.log(user === user); // true
console.log(user2 === user2); // true   
// Check if user and user2 are not the same object reference
console.log(user !== user2); // true
// Check if user and user2 have the same properties and values using Object.is
console.log(Object.is(user, user2)); // false
// Check if user and user2 are the same object reference using Object.is
console.log(Object.is(user, user)); // true 
console.log(Object.is(user2, user2)); // true
// Check if user and user2 are not the same object reference using Object.is
console.log(Object.is(user, user2)); // false

// Check if user and user2 have the same properties and values using a custom function
function areObjectsEqual(obj1, obj2) {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}
console.log(areObjectsEqual(user, user2)); // true
// Check if user and user2 are the same object reference using a custom function
function areSameObjectRef(obj1, obj2) {
    return obj1 === obj2;
}
console.log(areSameObjectRef(user, user2)); // false
console.log(areSameObjectRef(user, user)); // true
console.log(areSameObjectRef(user2, user2)); // true
// Check if user and user2 are not the same object reference using a custom function
console.log(!areSameObjectRef(user, user2)); // true
// Check if user and user2 have the same properties and values using a deep comparison
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true; // Same reference or both null/undefined
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;    
for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }       
    }
}