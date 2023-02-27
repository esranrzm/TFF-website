const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId, 
      ref: 'user', 
      required: true,
    },
    commentTo: {
      type: String,
      required: true,
      unique: true,
  },
    text: {
      type: String,
      required: [true, "Fill the blank to add a comment"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('comments', commentSchema);