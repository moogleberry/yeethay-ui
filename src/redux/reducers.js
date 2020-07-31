import { combineReducers } from "redux";
import { SET_RATING_OPTIONS } from "./actions";

function ratingOptions(state = [], action) {
	switch (action.type) {
	case SET_RATING_OPTIONS:
		return [
			...action.ratingOptions,
		];
	default:
		return state;
	}
}

const ratingApp = combineReducers({
	ratingOptions,
});

export default ratingApp;
