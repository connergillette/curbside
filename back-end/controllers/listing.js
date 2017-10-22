var User = require('../models/user');
var Item = require('../models/item');
var jwt = require('jwt-simple');
var moment = require('moment');

var https = require('https');

module.exports = {
	add: function(req, res) {
		var listing = new Item(req.body.item);
		User.findOne({
			_id: req.user
		}, function(err, user) {
			if (!err) {
				listing.owner = user;
				listing.save();
				console.log("Listing added: '" + listing.title + "'");
				res.status(200).send(listing);
			}
		});
	},
	get: function(req, res) {
		Item.findOne({
			_id: req.id
		}).populate("owner").exec(function(err, item) {
			if (!err) {
				res.status(200).send(item);
			}
		});
	}
}
