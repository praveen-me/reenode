import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import store from './store/store';
import { Provider } from 'react-redux';
import './scss/index.scss';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
