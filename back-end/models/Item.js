var mongoose = require('mongoose');

module.exports = mongoose.model('Item', {
	title: String,
	description: String,
	category: String,
	pickup_start: Date,
	pickup_end: Date,
	suggested_movers: Number,
	reward: String,
	estimated_weight: Number,
	owner_delivery: Boolean,
	owner: {
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	}
});
