console.log('I happen first');
// alert('Hello');
setTimeout(function () {
  console.log('I happen third');
}, 3000);
console.log('I happen second');
