const cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K', 'A'];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];

function pick(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getCard() {
  return {
    value: pick(cardValues),
    suit: pick(suits),
  };
}

console.log(getCard());
