const books = require('../data/books');

const getAllBooksHandler = (request, h) => {
  const { reading, finished, name } = request.query;

  let filteredBooks = books;
  if (reading === '1') {
    filteredBooks = books.filter((book) => book.reading === true);
  } else if (reading === '0') {
    filteredBooks = books.filter((book) => book.reading === false);
  } else if (finished === '1') {
    filteredBooks = books.filter((book) => book.finished === true);
  } else if (finished === '0') {
    filteredBooks = books.filter((book) => book.finished === false);
  } else if (name) {
    filteredBooks = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()));
  };

  const response = h.response({
    status: 'success',
    data: {
      books: filteredBooks.map((book) => ({
        id: book.id,
        name: book.name,
        publisher: book.publisher,
      })),
    },
  });
  response.code(200);
  return response;
};

module.exports = getAllBooksHandler;
