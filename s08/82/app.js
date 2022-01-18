// function square(x) {
//   return x * x;
//   console.log('done!');
// }

// function isPurple(color) {
//   if (color.toLowerCase() === 'purple') {
//     return true;
//   }
//   return false;
// }

// function isPurple(color) {
//   return color.toLowerCase() === 'purple' ? true : false;
// }

// function isPurple(color) {
//   return color.toLowerCase() === 'purple';
// }

function containsPurple(arr) {
  for (let elem of arr) {
    if (elem === 'purple' || elem === 'magenta') {
      return true;
    }
  }
  return false;
}

console.log(containsPurple(['blue', 'pink', 'magentas']));
