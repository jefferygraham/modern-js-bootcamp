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
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
};
