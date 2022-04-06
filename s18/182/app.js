async function greet() {
  return "Hello!";
}
greet().then((val) => console.log("Promise rosolved: ", val));

// async function add(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     throw new Error("Please use 2 numbers!");
//   }
//   return x + y;
// }

function add(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("X & y must be numbers!");
    }
    resolve(x + y);
  });
}

add(5, 11)
  .then((val) => console.log("Promise resolved; ", val))
  .catch((err) => console.log("Promise rejected: ", err));
