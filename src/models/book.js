const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: 'string', required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  publisher: { type: 'string', required: true },
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;
