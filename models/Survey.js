var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var schema = new Schema({
  title: {type: String, required: true, trim: true},
  name: {type: String, required: true, trim: true},
  email: {type: String, required: true, index: true, unique: true, trim: true},
  respondent: {type: Number, default: 0},
  startDate: {type: Date, default: Date.now},
  endDate: {type: Date, required: true},
  createdAt: {type: Date, default: Date.now},
}, {
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});
var User = mongoose.model('Survey', schema);

module.exports = User;
