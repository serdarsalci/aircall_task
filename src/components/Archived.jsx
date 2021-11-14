import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCalls } from '../features/calls/callsSlice';
import ArchiveAllCard from './ArchiveAllCard.jsx';
import CallItem from './CallItem.jsx';

const Archived = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCalls());
	}, []);

	const activitiesSlice = useSelector(state => state.activitiesSlice);
	const { archived, loading } = activitiesSlice;
	return (
		<>
			{loading ? (
				<div className='center'>loading</div>
			) : archived.length > 0 ? (
				<>
					<div>
						{archived.map(call => (
							<CallItem key={call.id} call={call} />
						))}
					</div>
				</>
			) : (
				<div class='center'>no archived calls</div>
			)}
		</>
	);
};

export default Archived;
