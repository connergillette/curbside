// Modules
// var gzippo = require("gzippo");
var express = require("express");
var server = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');

// Middleware
var cors = require('./services/cors');

server.use(cors);
server.use(bodyParser.json());


// Mongo connection
mongoose.connect("mongodb://localhost:27017/curbside-db", function(err, db) {
	if (!err) {
		console.log("Connected to Mongo");
	} else {
		console.log("MONGO ERROR: " + err);
	}
})

// Server listener
server.listen(4000, function() {
	console.log("Server listening on port 4000");
});
