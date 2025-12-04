let user = {
  name: "Pooja",
  address: {
    city: "Mumbai"
  }
};

console.log(user.address?.city);   // Mumbai
console.log(user.address?.pincode); // undefined
console.log(user.contact?.phone);  // undefined (no error)

