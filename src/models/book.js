const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookTitle: { type: String, required: true },
  authorsId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  publishersId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true,
  },
});

const Book = mongoose.model('Books', bookSchema);

module.exports = Book;
