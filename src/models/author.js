const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: 'string', required: true },
});

const Author = mongoose.model('author', authorSchema);

module.exports = Author;
