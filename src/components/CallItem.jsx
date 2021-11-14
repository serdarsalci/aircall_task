import React from 'react';
import IncomingPhone from '../images/incoming-call.svg';
import OutgoingCall from '../images/outgoing.svg';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const CallItem = ({ call }) => {
	console.log(call.direction);

	let navigate = useNavigate();

	const date = moment(call.created_at);

	const handleClick = () => {
		console.log('clicked');
		navigate(`/activity-details/${call.id}`);
	};

	return (
		<div
			className='call-item'
			onClick={e => {
				handleClick();
			}}>
			<div className='leadingIcon'>
				{call.direction === 'inbound' ? <IncomingPhone /> : <OutgoingCall />}
			</div>
			<div className='call-info'>
				<div id='from'>{call.from}</div>
				<div>tried to call on {call.via}</div>
			</div>
			<div className='time-container'>
				<span className='time'>{date.format('HH:mm')}</span>
				<span className='ampm-box'>PM</span>
			</div>
		</div>
	);
};

export default CallItem;
