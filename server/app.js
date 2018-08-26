var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 5000;
var router = express.Router();
var stops = require('./routes/stops');
var routes = require('./routes/routes');
var directions = require('./routes/directions');
var departures = require('./routes/departures');

var bodyParser = require('body-parser');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('https://svc.metrotransit.org/NexTrip/Routes?format=json', routes);
app.use('https://svc.metrotransit.org/NexTrip/Directions/5?format=json', directions);
app.use('http://svc.metrotransit.org/NexTrip/Stops/21/3?format=json', stops);


app.listen(port, function() {
  console.log('localhost running on port', port);
});
