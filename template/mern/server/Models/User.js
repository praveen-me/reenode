const bcrypt = require('bcrypt');
const SALT = 10;
const { Schema, model } = require('mongoose');

const userScheme = new Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	email: { type: String, required: true },
	fullName: { type: String, default: '', required: true }
});

userScheme.pre('save', function(next) {
	const generatedSalt = bcrypt.genSaltSync(SALT);
	const hashedPassword = bcrypt.hashSync(this.password, generatedSalt);
	this.password = hashedPassword;
	next();
});

const User = model('User', userScheme);

module.exports = User;
