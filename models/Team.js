const { Schema, model, Types } = require('mongoose');

const teamSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  members: {
    type: [Types.ObjectId],
    ref: 'User',
    required: [true, 'Members is required'],
    default: [],
  },
});

const Team = model('Team', teamSchema);

module.exports = Team;
