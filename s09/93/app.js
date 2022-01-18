// function multiplyBy(num) {
//   return function (x) {
//     return x * num;
//   };
// }

// const triple = multiplyBy(3);
// console.log(triple(8));

// const double = multiplyBy(2);
// console.log(double(8));

// const halve = multiplyBy(0.5);
// console.log(halve(8));

function makeBetweenFunc(lower, upper) {
  return function (x) {
    return lower < x && x < upper;
  };
}

const isChild = makeBetweenFunc(0, 18);
console.log(isChild(5));
console.log(isChild(65));

const isNineties = makeBetweenFunc(1990, 2000);
console.log(isNineties(1978));
console.log(isNineties(1996));

const isNiceWeather = makeBetweenFunc(60, 79);
console.log(isNiceWeather(45));
console.log(isNiceWeather(76));
