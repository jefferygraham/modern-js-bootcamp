const movies = [
  'The Talented Mr. Ripley',
  'Mr. and Mrs. Smith',
  'Mrs. Doubtfire',
  'Mr. Deeds',
];

const foundMovie = movies.find((movie) => movie.includes('Mrs.'));
const foundMovie2 = movies.find((movie) => movie.startsWith('Mrs.'));

const books = [
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
  },
  {
    title: 'Bones: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
  },
  {
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
  },
];

const foundGoodBook = books.find((book) => book.rating > 4.3);

const foundAuthor = books.find((book) => book.authors.includes('Neil Gaiman'));
