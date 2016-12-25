var mongoose = require('mongoose')

var NewsEntrySchema = mongoose.Schema({

  title: String,
  body: String,
  date: { type: Date, default: Date.now }

})

module.exports = mongoose.model('News', NewsEntrySchema)
