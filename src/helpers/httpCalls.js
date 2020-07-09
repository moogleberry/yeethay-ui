
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

export async function fetchRandomItem() {
	const path = "/rest/randomItem";
	const response = await fetch(serverInfo.url + serverInfo.port + path);
	const data = await response.json();
	return data;
}