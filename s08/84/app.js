function average(numArr) {
  let total = 0;
  for (let num of numArr) {
    total += num;
  }
  let avg = total / numArr.length;
  return avg;
}

console.log(average([0, 50]));
console.log(average([75, 76, 80, 95, 100]));
