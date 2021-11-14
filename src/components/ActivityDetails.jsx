import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
	getActivityDetails,
	archiveActivity,
	unArchiveActivity,
} from '../features/calls/callsSlice';
import IncomingPhone from '../images/incoming-call.svg';
import OutgoingCall from '../images/outgoing.svg';
import moment from 'moment';
// import CallItem from './CallItem';

const ActivityDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getActivityDetails(id));
	}, [dispatch, callSelected]);

	const callSlice = useSelector(state => state.activitiesSlice);
	const { loading, callSelected } = callSlice;

	const date = moment(callSelected.created_at);

	const formatted = moment
		.utc(moment.duration(callSelected.duration, 'seconds').as('milliseconds'))
		.format('HH:mm:ss');

	const handleClick = e => {
		console.log(callSelected.is_archived);
		callSelected.is_archived
			? dispatch(unArchiveActivity(id))
			: dispatch(archiveActivity(id));
		dispatch(toggleIsArchived(id));
	};

	return (
		<>
			{loading ? (
				<div className='center'>loading</div>
			) : (
				<>
					<div className='call-item'>
						<div className='leadingIcon'>
							{callSelected.direction === 'inbound' ? (
								<IncomingPhone />
							) : (
								<OutgoingCall />
							)}
						</div>
						<div className='call-info'>
							<div id='from'>{callSelected.from}</div>
							<div>
								tried to call on{' '}
								<span className='bold'>{callSelected.via}</span>{' '}
							</div>

							<div>
								<span>{callSelected.call_type}</span>{' '}
								<span>{callSelected.direction}</span>
								{' call '}
								<div>{callSelected.is_archived ? 'Archived' : ''}</div>
							</div>

							<span className='bold'>Duration </span>
							{formatted}
						</div>
						<div className='time-container'>
							<span className='time'>{date.format('HH:mm')}</span>
							<span className='ampm-box'>PM</span>
						</div>
					</div>
					<button
						onClick={e => handleClick(callSelected.is_archived)}
						className='btn'>
						{callSelected.is_archived ? 'Unarchive' : 'Archive'}
					</button>
				</>
			)}
		</>
	);
};

export default ActivityDetails;
