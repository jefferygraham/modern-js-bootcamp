const nums = [34, 35, 67, 54, 109, 102, 32, 9];

const odds = nums.filter((num) => num % 2 === 1);
const evens = nums.filter((num) => num % 2 === 0);

const largeNums = nums.filter((num) => num > 50);

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

const goodBooks = books.filter((book) => book.rating > 4.3);
const fantasyBooks = books.filter((book) => book.genres.includes('fantasy'));
const shortBooks = books.filter(
  (book) =>
    book.genres.includes('essay') || book.genres.includes('short stories')
);

const query = 'The';
const results = books.filter((book) =>
  book.title.toLowerCase().includes(query.toLowerCase())
);
