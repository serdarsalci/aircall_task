import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import store from './app/store';
import { Provider } from 'react-redux';

import App from './App';
import './css/body.css';
import './css/app.css';
import './css/header.css';
import './css/callCard.css';
import './css/bottomNav.css';

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />,
		</Provider>
	</BrowserRouter>,
	document.getElementById('app')
);
