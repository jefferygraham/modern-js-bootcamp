// const willGetYouADog = new Promise((resolve, reject) => {
//   const randomNumber = Math.random();
//   randomNumber < 0.5 ? resolve() : reject();
// });
// willGetYouADog
//   .then(() => {
//     console.log('got a dog');
//   })
//   .catch(() => {
//     console.log('No dog for you');
//   });

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomNumber = Math.random();
      randomNumber < 0.5 ? resolve() : reject();
    }, 5000);
  });
};

makeDogPromise()
  .then(() => {
    console.log('got a dog');
  })
  .catch(() => {
    console.log('No dog for you');
  });
