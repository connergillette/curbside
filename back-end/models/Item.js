var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	title: String,
	description: String,
	category: String,
	pickup_start: Date,
	pickup_end: Date,
	suggested_movers: Number,
	reward: String,
	estimated_weight: Number,
	owner_delivery: Boolean
});
