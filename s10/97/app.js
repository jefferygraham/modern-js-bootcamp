const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

numbers.forEach(function (num, index) {
  console.log(index, num * 2);
});

// function printTriple(num) {
//   console.log(num * 3);
// }

// numbers.forEach(printTriple);

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

// books.forEach(function (book) {
//   console.log(book.title);
// });

// for (let book of books) {
//   console.log(book.title.toUpperCase());
// }
