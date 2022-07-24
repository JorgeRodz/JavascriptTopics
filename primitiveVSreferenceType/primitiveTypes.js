// Primitive Types
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

console.log(`----------------------------------`);

const me = {
  name: "Jorge",
  age: 30,
};
const friend = me;

friend.age = 27;

console.log("Friend", friend);
console.log("Me", me);

console.log(`----------------------------------`);

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";

console.log(lastName);
console.log(oldLastName);

console.log(`----------------------------------`);

const maria = {
  firstName: "Maria",
  lastName: "Williams",
  age: 27,
};

const marriedMaria = maria;
marriedMaria.lastName = "Hernandez";

console.log("Before marriage: ", maria);
console.log("After marriage: ", marriedMaria);
