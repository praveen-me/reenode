import { LOG_IN } from '../types';

const initState = {
	token: localStorage.getItem('token'),
	user: null
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case LOG_IN: {
			const { payload } = action;

			localStorage.setItem('token', token);

			return {
				...state,
				token: payload.token,
				user: payload.user
			};
		}

		default:
			return state;
	}
};

export default rootReducer;
