const mongoose = require('mongoose');

const bitcoinSchema = new mongoose.Schema(
  {
    createdAt: { type: Date, required: true },
    value: { type: Number, required: true }
  }
);

module.exports = mongoose.model('Bitcoin', bitcoinSchema);
