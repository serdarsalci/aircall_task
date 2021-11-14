import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCalls } from '../features/calls/callsSlice';
import ArchiveAllCard from './ArchiveAllCard.jsx';
import CallItem from './CallItem.jsx';

const Inbox = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCalls());
	}, []);

	const activitiesSlice = useSelector(state => state.activitiesSlice);
	const { incomingCalls, loading } = activitiesSlice;
	return (
		<>
			{loading ? (
				<div className='center'>loading</div>
			) : (
				<>
					<ArchiveAllCard />
					<div>
						{incomingCalls.map(call => (
							<CallItem key={call.id} call={call} />
						))}
					</div>
				</>
			)}
		</>
	);
};

export default Inbox;
