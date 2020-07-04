import { combineReducers } from 'redux'
import {SET_RATING_OPTIONS, SET_RATING_DESCRIPTIONS} from './actions.js';

function ratingOptions(state = [], action) {
	switch(action.type) {
		case SET_RATING_OPTIONS:
			return [
				...action.ratingOptions
			];
		default:
			return state;
	}
}

function ratingDescriptions(state = {}, action) {
	switch(action.type) {
		case SET_RATING_DESCRIPTIONS:
			return Object.assign({}, state, {
				...action.ratingDescriptions
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