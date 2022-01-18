function add(x, y) {
  return x + y;
}

const subtract = function (x, y) {
  return x - y;
};

function multiply(x, y) {
  return x * y;
}

const divide = function (x, y) {
  return x / y;
};

const operations = [add, subtract, multiply, divide];

console.log(operations[0](100, 4));
console.log(operations[1](100, 4));
console.log(operations[2](100, 4));
console.log(operations[3](100, 4));

for (let func of operations) {
  console.log(func(30, 5));
}

const thing = {
  doSomething: multiply,
};

console.log(thing.doSomething(50, 2));
