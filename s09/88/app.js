// if (true) {
//   let animal = 'eel';
//   console.log(animal);
// }
// console.log(animal);

// if (true) {
//   var animal = 'eel';
//   console.log(animal);
// }
// console.log(animal);

let nums = [1, 2, 3, 4, 5];
function doubleArr(arr) {
  const newArr = [];

  for (let num of arr) {
    let double = num * 2;
    newArr.push(double);
  }

  return newArr;
}
console.log(doubleArr(nums));
