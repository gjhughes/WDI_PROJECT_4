const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },
  prediction: { type: Number}
});

const momentSchema = new mongoose.Schema(
  {
    endTime: { type: Date },
    lastBetTime: { type: Date },
    bets: [ betSchema ]
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
