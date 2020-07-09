
let serverInfo = {
	"url": "http://localhost",
	"port": ":3001"
};

export async function fetchRatingOptions() {
	const path = "/rest/ratingOptions";
	const response = await fetch(serverInfo.url + serverInfo.port + path);
	const data = await response.json();
	return data;
}

export async function fetchUnratedItem() {
	const path = "/rest/unratedItem";
	const response = await fetch(serverInfo.url + serverInfo.port + path);
	const data = await response.json();
	return data;
}