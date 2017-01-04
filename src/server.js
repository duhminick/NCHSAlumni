var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var path = require('path')
var randomatic = require('randomatic')

var User = require('./models/User')

var app = express()
app.use('/dist', express.static(path.join(__dirname, '/static/dist')))
// app.use(bodyParser.urlencoded({
//   extended: true
// }))
app.use(bodyParser.json())

mongoose.connect('mongodb://admin:admin@ds149258.mlab.com:49258/nchsalumni')

app.set('port', 8000)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/static/index.html'))
})

app.post('/api/register', function (req, res) {
  // TODO: Implement

  var newUser = new User({
    username: 'TestUser',
    password: 'pass',
    accessKey: 'poo'
  })
  newUser.save(function (err) {
    if (err) res.json({ success: false, error: err })
    res.json({ success: true })
  })
})

app.post('/api/login', function (req, res) {
  // Generates new access key for the user
  // TODO: Make sure username and password are not blank
  // TODO: Make username case insensitive
  var searchQuery = { username: req.body.username }
  User.findOne(searchQuery, function (err, user) {
    if (err) res.json({ success: false, error: err })
    if (user.password === req.body.password) {
      var newAccessKey = randomatic('*', 32)

      user.accessKey = newAccessKey
      user.save(function (err, updatedUser) {
        if (err) res.json({ success: false, error: err })
        res.json({ success: true, accessKey: newAccessKey })
      })
    } else {
      res.json({ success: false, error: 'Invalid account credentials' })
    }
  })
})

app.post('/api/logout', function (req, res) {
  // Removes access key from user
  var searchQuery = { accessKey: req.body.accessKey }
  var update = { accessKey: '' }
  User.findOneAndUpdate(searchQuery, update, function (err, doc) {
    if (err) res.json({ success: false, error: err })
    res.json({ success: true })
  })
})

app.get('*', function (req, res) {
  res.json({ success: false, error: 'Invalid access point' })
})

app.listen(app.get('port'), function () {
  console.log('Listening on port: ' + app.get('port'))
})
