import React from 'react';
import Person from '../images/person.svg';
import Dialpad from '../images/dialpad.svg';

const BottomNavigation = () => {
	return (
		<div className='bottom-nav'>
			<div className='bottom-row'>
				<div className='calls'>Calls</div>
				<div className='contacts'>
					<Person />
				</div>
				<div className='dialpad'>
					<Dialpad />
				</div>
				<div className='settings'>Settings</div>
				<div className='online'>online</div>
			</div>
		</div>
	);
};

export default BottomNavigation;
