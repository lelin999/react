import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path="/app" component={App} />
			<Route path="/signin" component={SignIn} />
			<Route path="/signup" component={SignUp} />
		</div>
	</BrowserRouter>, document.getElementById('root')
)