function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr);
}

function fullName(first, last, ...titles) {
  console.log(first);
  console.log(last);
  console.log(titles);
}

const multiple = (...nums) => {
  return nums.reduce((prod, curr) => prod * curr);
};
