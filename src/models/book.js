const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true,
  },
  publisherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Publisher',
    required: true,
  },
  price: { type: Number, required: true },
});

const Book = mongoose.model('book', bookSchema);

module.exports = Book;
