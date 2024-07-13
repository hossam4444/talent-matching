const { Schema, model } = require("mongoose");
const { nanoid } = require("nanoid");

const userSchema = new Schema(
  {
    user_id: {
      type: String,
      unique: true,
      required: true,
      default: () => nanoid(8),
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    password_salt: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const User = model("User", userSchema);

module.exports = User;
