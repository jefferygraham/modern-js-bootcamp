const makeDeck = () => {
  return {
    deck: [],
    discardPile: [],
    suits: ['hearts', 'diamonds', 'spades', 'clubs'],
    values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
    initialize() {
      const { deck, suits, values } = this;

      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({
            value,
            suit,
          });
        }
      }
    },
    drawCard() {
      const card = this.deck.shift();
      this.discardPile.push(card);
      return card;
    },
    drawCards(numCards) {
      const cards = [];
      for (let i = 1; i <= numCards; i++) {
        cards.push(this.drawCard());
      }
      return cards;
    },
    shuffle() {
      const { deck } = this;
      // loop over deck backwards
      for (let i = deck.length - 1; i > 0; i--) {
        // pick random index before current
        let ranIdx = Math.floor(Math.random() * (i + 1));
        // swap
        [deck[i], deck[ranIdx]] = [deck[ranIdx], deck[i]];
      }
    },
  };
};

// cleaner!
const myDeck = makeDeck();
myDeck.initialize();
myDeck.shuffle();
const h1 = myDeck.drawCards(2);
const h2 = myDeck.drawCards(2);
const h3 = myDeck.drawCards(5);

const deck2 = makeDeck();
deck2.initialize();
