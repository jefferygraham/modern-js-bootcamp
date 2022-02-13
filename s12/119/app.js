// const getStats = (arr) => {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);
//   const sum = reviews.reduce((sum, currVal) => sum + currVal);
//   const avg = sum / arr.length;
//   return {
//     max: max,
//     min: min,
//     sum: sum,
//     avg: avg,
//   };
// };

const getStats = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const sum = reviews.reduce((sum, currVal) => sum + currVal);
  const avg = sum / arr.length;
  return {
    max,
    min,
    sum,
    avg,
  };
};

const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];
const stats = getStats(reviews);

const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K', 'A'];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];

function pick(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getCard() {
  const value = pick(cardValues);
  const suit = pick(suits);

  return {
    value,
    suit,
  };
}

console.log(getCard());
