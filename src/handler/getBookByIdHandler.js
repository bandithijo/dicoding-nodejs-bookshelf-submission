const books = require('../data/books');

const getBookByIdHandler = (request, h) => {
  const { bookId } = request.params;

  const index = books.findIndex((book) => book.id === bookId);

  if (index !== -1) {
    const response = h.response({
      status: 'success',
      data: {
        book: books[index],
      }
    });
    response.code(200);
    return response;
  };

  const response = h.response({
    status: 'fail',
    message: 'Buku tidak ditemukan',
  });
  response.code(404);
  return response;
};

module.exports = getBookByIdHandler;
