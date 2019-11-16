const User = require('./../Models/User');

const handleErr = (msg, res, status) => {
	res.status(status).json({
		msg
	});
};

module.exports = {
	signup(req, res) {
		const { email, fullName, username, password } = req.body;

		if ((!email || !fullName || !username, !password)) {
			handleErr('All fields are necessary', res, 400);
			return;
		}

		const newUser = new User({ ...req.body });

		User.findOne({ username }, (error, user) => {
			if (error) {
				handleErr('Something went wrong', res, 500);
				return;
			}

			if (user != null) {
				res.json({
					msg: 'Username already found'
				});
				return;
			}

			newUser.save(err => {
				if (err) {
					res.status(500).json({
						msg: 'Something went wrong'
					});
					return;
				}

				return res.status(200).json({
					msg: 'User Created'
				});
			});
		});
	}
};
