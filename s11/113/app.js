function sum() {
  const numbers = [...arguments];
  return numbers.reduce((acc, next) => acc + next);
}

function fullName()
