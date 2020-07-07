export const SET_RATING_OPTIONS = 'SET_RATING_OPTIONS';

export function setRatingOptions(arr) {
	return {
		type: SET_RATING_OPTIONS,
		ratingOptions: arr
	};
}
