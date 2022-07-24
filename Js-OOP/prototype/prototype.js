/*---------------------------------------------------  Constructor function  - belongs to prototype ----------------------------------------------------*/
// This constructor function is part of the prototype

/*---------------- Constructor function to create instances objects - class --------------------*/
/** We have to used the 'new' operator in order to call a constructor function, otherwise this will not work, when calling a constructor function with the 'new' operator this things happen: **/
// 1. New {} empty object is created
// 2. 'this' keyword correspond to the empty object we previously mention, and assign the object properties and methods
// 3. We assign the prototype to the {}
// 4. function automatically return the object

const Person = function (firstName, birthYear) {
  // Instance properties - This properties will attach to objects created with this constructor
  this.firstName = firstName;
  this.birthYear = birthYear;
};

/*Create an object instance using the Person constructor function*/
const jorge = new Person("Jorge", 1992); // the 'new' operator -> lets developers create an instance of a user-defined object type using a constructor function or one of the built-in object types that has a constructor function.

console.log(jorge);

const maria = new Person("Maria", 2017);
const jack = new Person("Jack", 1975);
console.log(maria, jack);

const jay = "Jay";

// *Note*
/* The `instanceof` operator tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value.*/
console.log(`jorge instanceof Person : ${jorge instanceof Person}`); //true
console.log(`jay instanceof Person : ${jay instanceof Person}`); //true

console.log("---------------------------------------");

/*---------------- Adding properties and methods on the prototype --------------------*/
/* This properties and methods will inherits on the instances objects created with the constructor function */
Person.prototype.calcAge = function () {
  console.log(`I'm ${2022 - this.birthYear}`);
};
// Adding properties to the prototype
Person.prototype.species = "Homo Sapiens";

console.dir(Person);
console.log(Person.prototype);

// Callign the previous methods and properties on instance objects
jorge.calcAge();
console.log(jorge.species); // Homo sapiens
