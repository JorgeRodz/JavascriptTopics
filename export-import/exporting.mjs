/* -- Old way of export */
// const cerditosFelices = ["Chancho 1", "Chancho 2", "Chancho 3"];
// const cerditosTristes = ["Triste 1", "Triste 2", "Triste 3"];

// module.exports = {
//   cerditosFelices,
//   cerditosTristes,
// };

/* -- New way of export*/
const perritosFelices = ["Perrito 1", "Perrito 2", "Perrito 3"];
const perritosTristes = ["Triste 1", "Triste 2", "Triste 3"];
const gatitosLocos = ["Loco 1", "Loco 2", "Loco 3"];

const fn1 = () => console.log("Soy la funcion 1");
function fn2() {
  console.log(`Soy la funcion 2`);
}

export { perritosTristes, gatitosLocos, fn1, fn2 };
export default perritosFelices;
