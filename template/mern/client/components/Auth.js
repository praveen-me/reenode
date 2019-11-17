import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Auth = () => {
	const isLoginPage = location.href.includes('login');
	const [userCreds, setUserCreds] = useState({
		username: '',
		password: ''
	});

	const handleChange = ({ target: { value, name } }) => {
		setUserCreds({
			...userCreds,
			[name]: [value]
		});
	};

	const changeAuthPage = () => {
		setIsLogin(!isLoginPage);
		setUserCreds({
			username: '',
			password: ''
		});
	};

	return (
		<div className='auth'>
			<h4 className='center'>{isLoginPage ? 'Welcome Back' : 'Register Now'}</h4>
			<form className='auth__form row center'>
				<input
					className='u-full-width'
					type='text'
					placeholder='Username'
					name='username'
					onChange={handleChange}
				/>
				<input
					className='u-full-width'
					placeholder='Password'
					type='password'
					name='password'
					onChange={handleChange}
				/>
				{!isLoginPage && (
					<>
						<input
							className='u-full-width'
							placeholder='Email'
							type='email'
							name='email'
							onChange={handleChange}
						/>
						<input
							className='u-full-width'
							type='text'
							placeholder='FullName'
							name='fullName'
							onChange={handleChange}
						/>
					</>
				)}
				<button type='submit' className='button button-primary'>
					{isLoginPage ? 'Login' : 'Signup'}
				</button>
			</form>
			<div className='center'>
				<Link onClick={changeAuthPage} to={isLoginPage ? '/signup' : '/login'}>
					{isLoginPage ? 'Register Now' : 'Login Now'}
				</Link>
			</div>
		</div>
	);
};

export default Auth;
