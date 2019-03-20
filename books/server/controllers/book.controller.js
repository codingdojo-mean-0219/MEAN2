const Book = require('mongoose').model('Book');
const { Http } = require('@status/codes');

module.exports = {
  // retrieving all of a resource (books: Book[])
  index(_request, response) {
    Book.find({})
      .then(books => response.json(books))
      .catch(error => response.status(Http.InternalServerError).json(error));
  },
  // create a resource
  create(request, response) {
    Book.create(request.body)
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  // retrieve a single resource
  show(request, response) {
    const { book_id: bookId } = request.params;

    Book.findById(bookId)
      .then(book => response.json(book))
      .catch(error =>
        response.status(Http.UnavailableForLegalReasons).json(error)
      );
  },
  // update a single resource
  update(request, response) {
    const { book_id: bookId } = request.params;
    Book.findByIdAndUpdate(bookId, request.body, { new: true })
      .then(book => response.json(book))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        response.status(Http.UnprocessableEntity).json(errors);
      });
  },
  // destroy/delete/remove aa single resource
  destroy(request, response) {
    const { book_id: bookId } = request.params;
    Book.findByIdAndRemove(bookId)
      .then(book => response.json(book))
      .catch(error => response.status(Http.ResetContent).json(error));
  },
};
