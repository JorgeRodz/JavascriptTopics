/* -- Old way of import */

// const cerditos = require("./exporting.mjs");

// const { cerditosFelices } = cerditos;

// console.log(cerditosFelices);

/* -- New way of import */

/* Notes
    - We can change the default name of the default export (happyDogs)
    - We can rename individual export (perritosTristes)
    - We can import multiple exports (gatitosLocos)

*/

import happyDogs, {
  perritosTristes as sadDogs,
  gatitosLocos,
  fn1,
  fn2,
} from "./exporting.mjs";

console.log(happyDogs);
console.log(sadDogs);
console.log(gatitosLocos);
fn1();
fn2();
