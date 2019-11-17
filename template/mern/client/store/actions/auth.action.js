import { LOG_IN } from '../types';

const API_VERSION = '/api/v1';

export const loginIn = userCreds => async dispatch => {
	try {
		const response = await fetch(`${API_VERSION}/login`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(userCreds)
		});

		const userData = await response.json();

		dispatch({
			type: LOG_IN,
			payload: {
				...userData
			}
		});

		return Promise.resolve(true);
	} catch (e) {
		return Promise.reject(e);
	}
};
