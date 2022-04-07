class Pet {
  constructor(age, name) {
    this.age = age;
    this.name = name;
  }

  eat() {
    return `${this.name} is eating.`;
  }
}

class Cat extends Pet {
  constructor(name, age, lives) {
    super(name);
    this.lives = lives;
  }
  meow() {
    return "Meow!!!";
  }
}

class Dog extends Pet {
  bark() {
    return "Woof!!!";
  }

  eat() {
    return `${this.name} gobbles his food!`;
  }
}

const penny = new Cat(3, "Penelope");
const riley = new Dog(6, "Riley");
