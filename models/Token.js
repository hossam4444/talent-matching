const { Schema, model } = require('mongoose');

const tokenSchema = new Schema({
  // TODO: implement encryption or hashing for the token
  token: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  session: {
    userAgent: {
      type: String,
      required: true,
    },
    ip: {
      type: String,
      required: true,
    },
    location: {
      type: String,
    },
  },
  blacklisted: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
});

const Token = model('Token', tokenSchema);

module.exports = Token;
