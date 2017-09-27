var express = require('express');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');
var bodyParser = require('body-parser');
require('./Models/musicians');
require('./routes')(app);
app.use(bodyParser.json());
app.get('/', function(req, res) {
  res.send('Hello Anshu\n');
});

var mongouri = 'mongodb://localhost/courseapi';
mongoose.connect(mongouri);
var db = mongoose.connection;
db.on('error', function(){
	throw new error('unable to connect to the '+ mongouri);
});
/*
app.get('/musician/:name', function(req, res) {

   console.log(req.params.name)
   res.send('{"id": 1,"name":"Matt","band":"BBQ Brawlers"}');
});
*/
app.listen(3001);
console.log('Listening on port 3001...');