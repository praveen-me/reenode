import React from 'react';
import AuthHoc from './hoc/AuthHoC';

const HomePage = () => {
	return <div>Home</div>;
};

export default AuthHoc(HomePage);
