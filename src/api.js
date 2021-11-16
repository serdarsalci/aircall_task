import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getCalls = createAsyncThunk('calls/getCalls', async () => {
	const { data } = await axios.get(
		'https://aircall-job.herokuapp.com/activities'
	);
	return data;
});

export const getActivityDetails = createAsyncThunk(
	'calls/getActivityDetails',
	async id => {
		const { data } = await axios.get(
			`https://aircall-job.herokuapp.com/activities/${id}`
		);
		return data;
	}
);

const headers = {
	'Content-Type': 'application/json',
};

export const archiveActivity = createAsyncThunk(
	'calls/archiveActivity',
	async id => {
		const { data } = await axios.post(
			`https://aircall-job.herokuapp.com/activities/${id}`,
			{ is_archived: true },
			{
				headers: headers,
			}
		);
		return data;
	}
);

export const unArchiveActivity = createAsyncThunk(
	'calls/unArchiveActivity',
	async id => {
		const { data } = await axios.post(
			`https://aircall-job.herokuapp.com/activities/${id}`,
			{ is_archived: false },
			{
				headers: headers,
			}
		);
		return data;
	}
);
