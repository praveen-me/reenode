const LocalStrategy = require('passport-local').Strategy;
const User = require('./../Models/User');

module.exports = passport => {
	// Serializing the user by
	passport.serializeUser(function(user, done) {
		done(null, user.id);
	});

	passport.deserializeUser(function(id, done) {
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});

	passport.use(
		new LocalStrategy((username, password, done) => {
			User.findOne({ username }, (error, user) => {
				if (error) return done(error, null);

				if (user == null) {
					done(null, false, { message: 'Incorrect username.' });
					return;
				}

				if (!user.verifyPassword(password)) {
					done(null, false, { message: 'Incorrect password.' });
					return;
				}

				const userCopy = { ...user._doc };
				delete userCopy.password;
				delete userCopy.__v;

				return done(null, userCopy);
			});
		})
	);
};
