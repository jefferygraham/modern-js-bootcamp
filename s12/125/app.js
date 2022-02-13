// the value of this depends on the invocation
// context of the function it is used in
function sayHi() {
  console.log('Hi!');
  // this => windpw (global scope object in the browser)
  console.log(this);
}

const person = {
  first: 'Cherilyn',
  last: 'Sarkisian',
  nickName: 'Cher',
  fullName() {
    const { first, last, nickName } = this;
    return `${first} ${last} BKA ${nickName}`;
  },
  printBio() {
    console.log(this);
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
  // arrow functions don't get their own thiscle
  laugh: () => {
    console.log(this);
    console.log(`${this.nickName} says LMAO!`);
  },
};

const printBio = person.printBio;
