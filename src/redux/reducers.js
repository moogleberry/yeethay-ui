import { combineReducers } from 'redux'
import {SET_RATING_OPTIONS, SET_RATING_DESCRIPTIONS} from './actions.js';

function ratingOptions(state = [], action) {
	switch(action.type) {
		case SET_RATING_OPTIONS:
			return Object.assign({}, state, {
				ratingOptions: action.ratingOptions
			});
		default:
			return state;
	}
}

function ratingDescriptions(state = {}, action) {
	switch(action.type) {
		case SET_RATING_OPTIONS:
			return Object.assign({}, state, {
				ratingDescriptions: action.ratingDescriptions
			});
		default:
			return state;
	}
}

const ratingApp = combineReducers({
	ratingOptions,
	ratingDescriptions
});

export default ratingApp;