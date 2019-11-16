const LocalStrategy = require('passport-local').Strategy;
const User = require('./../Models/User');

module.exports = passport => {
	console.log('In Passport function');

	passport.use(
		new LocalStrategy((username, password, done) => {
			User.findOne({ username }, (error, user) => {
				if (error) return done(error, null);

				if (!user) return done(null, false, { message: 'Incorrect username.' });

				if (!user.verifyPassword(password)) {
					return done(null, false, { message: 'Incorrect password.' });
				}

				const userCopy = { ...user._doc };
				delete userCopy.password;
				delete userCopy.__v;

				return done(null, userCopy);
			});
		})
	);
};
