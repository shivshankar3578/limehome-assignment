const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validate = require('mongoose-validator');


const nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];



const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    validate: nameValidator
  }
}, {
  timestamps: {
    createdAt: 'created',
    updatedAt: 'updated'
  },
  id: false
});


module.exports = mongoose.model('User', userSchema)
