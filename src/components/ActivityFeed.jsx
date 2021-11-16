import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCalls } from '../api.js';
import ArchiveAllCard from './ArchiveAllCard.jsx';
import CallItem from './CallItem.jsx';

const ActivityFeed = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('useEffect in Activity Feed');
		dispatch(getCalls());
	}, []);

	const activitiesSlice = useSelector(state => state.activitiesSlice);
	const { calls, loading } = activitiesSlice;
	return (
		<>
			{loading ? (
				<div className='center'>loading</div>
			) : (
				<>
					<ArchiveAllCard />
					<div>
						{calls.map(call => (
							<CallItem key={call.id} call={call} />
						))}
					</div>
				</>
			)}
		</>
	);
};

export default ActivityFeed;
