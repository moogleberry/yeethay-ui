export const SET_RATING_OPTIONS = 'SET_RATING_OPTIONS';
export const SET_RATING_DESCRIPTIONS = 'SET_RATING_DESCRIPTIONS';

export function setRatingOptions(arr) {
	return {
		type: SET_RATING_OPTIONS,
		ratingOptions: arr
	};
}

export function setRatingDescriptions(obj) {
	return {
		type: SET_RATING_DESCRIPTIONS,
		ratingDescriptions: obj
	};
}