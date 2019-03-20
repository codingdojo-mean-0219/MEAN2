// const bookController = require('../controllers/book.controller')
const { bookController } = require('../controllers');
const router = require('express').Router();

// /books/alsdfgkjkalsdfghj

module.exports = router
  .get('/', bookController.index)
  .post('/', bookController.create)
  .get('/:book_id', bookController.show)
  .put('/:book_id', bookController.update)
  .delete('/:book_id', bookController.destroy);
