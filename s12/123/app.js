// this => current execution scope
function sayHi() {
  console.log('Hi!');
  console.log(this);
}
sayHi();

// Window = global scope
const greet = function () {
  console.log('Salutations!');
  console.log(this);
};
greet();
