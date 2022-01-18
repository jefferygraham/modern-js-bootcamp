// function callThreeTimes(func) {
//   func();
//   func();
//   func();
// }

function laugh() {
  console.log('LOLOLOLOL');
}

function cry() {
  console.log('BOOHOOHOO');
}

// callThreeTimes(laugh);

// function repeatNTimes(func, numTimes) {
//   for (let i = 0; i < numTimes; i++) {
//     func();
//   }
// }

// repeatNTimes(laugh, 5);

function pickOne(func1, func2) {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    func1();
  } else {
    func2();
  }
}

pickOne(laugh, cry);
