const words = ['dog', 'dig', 'log', 'bag', 'wag'];

// every word is 3 letters longs
console.log('all words are 3 letters longs:');
console.log(words.every((word) => word.length === 3));

// every word ends with g
console.log('\nall words end with g:');
console.log(words.every((word) => word[word.length - 1] === 'g'));
console.log(words.every((word) => word.endsWith('g')));

// some words starts with d
console.log('\nsome words start with d:');
console.log(words.some((word) => word.startsWith('d')));
console.log(words.some((word) => word[0] === 'd'));

// every word starts with d
console.log('\nevery word starts with d:');
console.log(words.every((word) => word[0] === 'd'));

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essay'],
  },
  {
    title: 'Bones: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'fantasy', 'graphic novel'],
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction'],
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy'],
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.16,
    genres: ['fiction', 'short stories'],
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic'],
  },
  {
    title: 'Lord of the Flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction'],
  },
];

console.log('\nEvery book is above 3.5');
console.log(books.every((book) => book.rating > 3.5));

console.log('\nSome books have 2 authors');
console.log(books.some((book) => book.authors.length === 2));
