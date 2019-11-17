import React from 'react';

const FormTextInput = ({ placeholder, name, handleChange, type }) => {
	return <input className='u-full-width' placeholder={placeholder} type={type} name={name} onChange={handleChange} />;
};

export default FormTextInput;
