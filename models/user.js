const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    required: true,
    type: String,
    validate: {
      validator(link) {
        return validator.isURL(link);
      },
    },
  },
});

module.exports = mongoose.model('user', userSchema);
