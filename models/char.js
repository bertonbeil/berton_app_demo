const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GeoSchema = new Schema({
  type: {
    type: "String",
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

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
  },
  geometry: GeoSchema
});

const Char = mongoose.model('char', CharSchema);

module.exports = Char;
