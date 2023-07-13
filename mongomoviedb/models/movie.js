const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MovieSchema = new Schema(
  {
    title: {type: String, required: true, maxlength: 150},
    director: {type: String, required: true, maxlength: 200},
    year: {type: String, required: true}
  }
);

//Export model
module.exports = mongoose.model('Movie', MovieSchema);