function greet(name) {
  console.log('Hi!', name);
}

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log('Rolled:', roll);
}

function throwDice(numTimes) {
  for (let i = 1; i <= numTimes; i++) {
    rollDie();
  }
}
