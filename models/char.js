const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CharSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"]
  },
  level: {
    type: String
  },
  available: {
    type: Boolean,
    default: false
  }
  // more props
});

const Char = mongoose.model('char', CharSchema);

module.exports = Char;
