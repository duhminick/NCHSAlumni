var mongoose = require('mongoose')

var PersonSchema = mongoose.Schema({

  firstName: String,
  lastName: String,
  graduationYear: Number

})

module.exports = mongoose.model('Person', PersonSchema)
