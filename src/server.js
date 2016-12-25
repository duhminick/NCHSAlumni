var express = require('express')
var mongoose = require('mongoose')

var app = express()

app.set('port', 8000)

app.get('*', function (req, res) {
  res.send('Hello')
})

app.listen(app.get('port'), function () {
  console.log('Listening on port: ' + app.get('port'))
})
