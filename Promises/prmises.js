let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("success");
  } else {
    reject("failed");
  }
});

p.then((resolveAnswer) => {
  console.log("This is in the then " + resolveAnswer);
}).catch((rejectAnswer) => {
  console.log("This is the catch " + rejectAnswer);
});
