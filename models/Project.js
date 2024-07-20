const { Schema, model, Types } = require('mongoose');

const projectSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    author: {
      type: Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required'],
    },
    team: {
      type: Types.ObjectId,
      ref: 'Team',
      required: [true, 'Team is required'],
    },
  },
  { timestamps: true },
);

const Project = model('Project', projectSchema);

module.exports = Project;
