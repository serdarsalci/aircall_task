import { configureStore } from '@reduxjs/toolkit';
import callsReducer from '../features/calls/callsSlice';
import thunk from 'redux-thunk';

const store = configureStore({
	reducer: {
		activitiesSlice: callsReducer,
	},
});

export default store;
