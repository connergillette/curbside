// Modules
var express = require("express");
var server = express();
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');

// Middleware
var cors = require('./services/cors');
var checkAuthenticated = require('./services/checkAuthenticated')

var auth = require('./controllers/auth');

server.use(cors);
server.use(bodyParser.json());

// USER GET / POST
server.get("/user/:id", auth.getUser);
server.post("/auth/register", auth.register);

// USER LOGIN
server.post("/auth/login", checkAuthenticated, auth.login);

// USER DASHBOARD
server.get("/dashboard", checkAuthenticated, auth.getUser);

// ITEM LISTINGS
server.post("/listing/add", checkAuthenticated, listing.add);

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
