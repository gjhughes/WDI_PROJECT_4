const mongoose = require('mongoose');

const momentSchema = new mongoose.Schema(
  {
    endTime: { type: Date, required: true },
    lastBetTime: { type: Date, required: true },
    bets: [{
      user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
      prediction: { type: Number, required: true }
    }]
  }
);

const groupSchema = new mongoose.Schema(
  {
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
    groupName: { type: String, required: true },
    image: { type: String },
    members: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
    moments: [momentSchema]
  }
);

module.exports = mongoose.model('Group', groupSchema);
