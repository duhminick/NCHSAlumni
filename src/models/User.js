var express = require('express')
var mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  accessKey: String
})

// TODO: http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt

module.exports = mongoose.model('User', UserSchema)
