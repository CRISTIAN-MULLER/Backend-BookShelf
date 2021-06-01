const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  age: { type: Number, required: true },
});

const Author = mongoose.model('author', authorSchema);

module.exports = Author;
