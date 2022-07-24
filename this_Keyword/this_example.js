"use strict";

console.log(this); // 'this' keyword here points to Window (global scope)

console.log("------------");

// here the 'this' keyword is undefined because we do not have a references to point
const calcAge = function (birthYear) {
  console.log(2022 - birthYear);
  console.log(`this : ${this}`);
};

calcAge(1992);

console.log("------------");

// here the 'this' keyword points to Window because arrow function does not have a this context
const calcAgeArrow = (birthYear) => {
  console.log(2022 - birthYear);
  console.log(this); // points to Window (global scope)
};

calcAgeArrow(2002);

console.log("------------");

const jorge = {
  year: 1992,
  calcAge: function () {
    console.log(this); // point to this object itself
    console.log(2022 - this.year);
  },
};

jorge.calcAge();

console.log("------------");

const maria = {
  year: 2017,
};

maria.calcAge = jorge.calcAge;
maria.calcAge();

console.log("------------");

const f = jorge.calcAge;
f(); // throws an error bacause
