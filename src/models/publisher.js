const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  foundation: { type: Date, required: true },
});

const Publisher = mongoose.model('publisher', publisherSchema);

module.exports = Publisher;
