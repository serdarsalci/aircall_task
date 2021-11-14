import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ActivityFeed from './components/ActivityFeed.jsx';
import Inbox from './components/Inbox.jsx';
import BottomNavigation from './components/BottomNavigation.jsx';
import ActivityDetails from './components/ActivityDetails.jsx';
import Archived from './components/Archived.jsx';

import Header from './components/Header.jsx';

class App extends Component {
	render() {
		return (
			<div className='container'>
				<div className='container-view'>
					<Header />
					<div className='scroll-view'>
						<Routes>
							<Route path='/' element={<Navigate replace to='/activities' />} />
							<Route path='/inbox' element={<Inbox />} />
							<Route path='/activities' element={<ActivityFeed />} />
							<Route path='/archived' element={<Archived />} />
							<Route
								path='/activity-details/:id'
								element={<ActivityDetails />}
							/>
						</Routes>
					</div>
					<BottomNavigation />
				</div>
			</div>
		);
	}
}

export default App;
