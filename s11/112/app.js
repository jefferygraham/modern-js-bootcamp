const canine = {
  family: 'Caninae',
  furry: true,
  legs: 4,
};

const feline = {
  legs: 4,
  family: 'Felidae',
};

const dog = {
  ...canine,
  isPet: true,
  adorable: true,
};

const houseCat = {
  ...feline,
  isGrumpy: true,
  personality: 'unpredictable',
};

const catDog = {
  ...canine,
  ...feline,
};

const catDogClone = {
  ...catDog,
};

const random = [...'hello', { ...catDog }];
