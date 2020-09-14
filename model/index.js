
const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const userModel = require("./user");
const propertyModel = require("./property");

module.exports = { propertyModel, userModel };