var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	name: String,
	email: String,
	pwd: String,
	phone: String
});
