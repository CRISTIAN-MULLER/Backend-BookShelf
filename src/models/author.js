const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  authorName: { type: String, required: true },
  alias: { type: String, required: true },
  birthdDay: { type: Date, required: true },
  birthState: { type: String, required: true },
  country: { type: String, default: 'Brasil' },
  nationalities: { type: String, required: true },
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
