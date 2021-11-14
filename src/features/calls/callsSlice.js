import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

const callsSlice = createSlice({
	name: 'calls',
	initialState: {
		loading: false,
		calls: [],
		incomingCalls: [],
		archived: [],
		callSelected: {},
		status: null,
	},
	reducers: {},
	extraReducers: {
		[getCalls.pending]: (state, action) => {
			state.status = 'loading';
			state.loading = true;
		},
		[getCalls.fulfilled]: (state, action) => {
			state.calls = action.payload.filter(call => call.is_archived !== true);
			state.archived = action.payload.filter(call => call.is_archived === true);
			state.incomingCalls = action.payload.filter(
				call => call.direction === 'inbound'
			);
			state.status = 'success';
			state.loading = false;
		},
		[getCalls.rejected]: (state, action) => {
			state.loading = false;
			state.status = 'failed';
		},
		[getActivityDetails.pending]: (state, action) => {
			state.loading = true;
		},
		[getActivityDetails.fulfilled]: (state, action) => {
			state.callSelected = action.payload;
			state.loading = false;
		},
		[getActivityDetails.rejected]: (state, action) => {
			state.loading = false;
		},
		[archiveActivity.pending]: (state, action) => {
			state.loading = true;
		},
		[archiveActivity.fulfilled]: (state, action) => {
			state.callSelected = action.payload;
			state.loading = false;
		},
		[archiveActivity.rejected]: (state, action) => {
			state.loading = false;
		},
		[unArchiveActivity.pending]: (state, action) => {
			state.loading = true;
		},
		[unArchiveActivity.fulfilled]: (state, action) => {
			state.callSelected = action.payload;
			state.loading = false;
		},
		[unArchiveActivity.rejected]: (state, action) => {
			state.loading = false;
		},
	},
});
export const { requestCalls, testRed } = callsSlice.actions;
export default callsSlice.reducer;
