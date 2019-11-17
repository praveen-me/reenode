import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '../scss/index.scss';
import { getCurrentUser, noToken } from '../actions';

import HomePage from '../components/HomePage';
import Login from '../components/Login';
import Signup from '../components/Signup';

class App extends Component {
	state = {
		token: ''
	};

	componentDidMount() {
		const token = localStorage.getItem('authToken') || '';
		if (token) {
			this.setState({ token: token });
			this.props.dispatch(getCurrentUser());
		} else {
			this.props.dispatch(noToken());
		}
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path='/login' component={Login} />
					<Route exact path='/signup' component={Signup} />
					<Route exact path='/' component={HomePage} />
				</Switch>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser.user
	};
};

export default connect(mapStateToProps)(App);
