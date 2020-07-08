
export async function fetchRatingOptions() {
	const response = await fetch("http://localhost:3001/static/data/ratingOptions.json");
	const data = await response.json();
	return data;
}

export async function fetchUnratedItem() {
	const response = await fetch("http://localhost:3001/static/data/ginger.json");
	const data = await response.json();
	return data;
}