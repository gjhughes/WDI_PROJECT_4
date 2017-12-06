const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  belongsTo: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  planType: { type: String, required: true },
  provider: { type: String, required: true },
  startDate: { type: String, required: true },
  initialInvestment: { type: Number, required: true },
  regularInvestment: { type: Number, required: true },
  underlyingFund: { type: String, required: true }
});

module.exports = mongoose.model('Plan', planSchema);
