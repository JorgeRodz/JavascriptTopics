const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, passangerName) {
    console.log(
      `${passangerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passangerName,
    });
  },
};

// calling the lufthansa.book() to create new bookings
lufthansa.book(239, "Jonas Schmedtmann");
lufthansa.book(784, "John Smith");
console.log(lufthansa);

// create a new object
const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

// creating our book() function in order to call it on other objects
const book = function (flightNum, passangerName) {
  console.log(
    `${passangerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({
    flight: `${this.iataCode}${flightNum}`,
    passangerName,
  });
};
// console.dir(book);

console.log(`----------------------------------------`);

// * --------------- Function.prototype.call --------------------*/

// we pass as a first argument the context of the keyword 'this', in this case are the objects of eurowings and lufthansa

try {
  // ! this will throw an error because the context of the keyword 'this' is undefined
  book(23, "Sara Williams");
} catch (error) {
  console.error(error);
}

// Now calling the book function with the 'call' method will work, because we are passing the context of the keyword 'this' as a first argument
book.call(eurowings, 23, "Sara Williams");
console.log(eurowings);

// same as above code
book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const fly = {
  airline: "Flyair Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(fly, 784, "Pedro Maromas");
console.log(fly);

console.log(`----------------------------------------`);

// * ---------------- Function.prototype.apply --------------------*/
/*
  With the apply method we need to pass:
  - The context of the 'this' keyword
  - Array of parameters
  See the examples
*/
const flightData = [789, "George Cooper"];

book.apply(fly, flightData);
console.log(fly);

book.apply(fly, [543, "Thomas Pepper"]);
console.log(fly);

console.log(`----------------------------------------`);

// * ---------------- Function.prototype.bind  --------------------*/
/* The 'bind' method return a new function with the 'this' keyword attach to the object we pass.
We can also set the parameters too.
*/
/* This is the book() function
Const book = function (flightNum, passangerName) {
  console.log(
    `${passangerName} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
  );
  this.bookings.push({
    flight: `${this.iataCode}${flightNum}`,
    passangerName,
  });
};
*/

// Here we create new functions with the 'this' keywords attach to the object we pass
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookFY = book.bind(fly);

bookEW(74, "Steven Williams");
console.log(eurowings);
bookLH(74, "Steven Williams");
console.log(lufthansa);
bookFY(74, "Steven Williams");
console.log(fly);

// Here we are creating a new function with the 'this' keyword context set with an object and also we are preestablish the parameter flightNum. See the example below.
const bookEW23 = book.bind(eurowings, 23);
bookEW23("Jonas Brother");
bookEW23("Timon Vallejo");
bookEW23("Lucas Barrios");
console.log(eurowings);

// * ----- With Event Listeners -----
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  // when call it without the bind method will be point to the button
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// / This will not work because the keyword 'this' when is call it by an evenHandler is set to the element who call it; in this case the 'this' keyword wil be point to the button, so we need to use the 'bind' method on function an pass the lufthansa object in order to word
// document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);

// note: This is the correct way to call the method
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// * ----- Partial application -----
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// We can even using the bind() function for binding just parameters. Passing 'null' as first argument, an second argument the param. See the example below
const addVAT = addTax.bind(null, 0.23);
const addVAT2 = (value) => value + value * 0.23; // same result as the line above, here we are manually set the rate

console.log(addVAT(100));
console.log(addVAT2(100));
console.log(addVAT(23));
console.log(addVAT2(23));
