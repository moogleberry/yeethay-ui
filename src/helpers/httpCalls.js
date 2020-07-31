
let serverInfo = {
	"url": "http://localhost",
	"port": ":3001"
};

function getUrl(path) {
	return serverInfo.url + serverInfo.port + path;
}

export async function fetchRatingOptions() {
	const path = "/rest/ratingOptions";
	const response = await fetch(getUrl(path));
	const data = await response.json();
	return data;
}

export async function fetchRandomItem() {
	const path = "/rest/randomItem";
	const response = await fetch(getUrl(path));
	const data = await response.json();
	return data;
}

export async function fetchUnratedItem() {
	const path = "/rest/unratedItem";
	const response = await fetch(getUrl(path));
	const data = await response.json();
	return data;
}

export async function rateItem(ratingItemId, ratingValue, user) {
	const body = {
		ratingItemId: ratingItemId,
		ratingValue: ratingValue,
		user: user
	};

	const path = "/rest/rateItem";
	const response = await fetch(getUrl(path), {
		method: "PUT",
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});

	const data = await response.json();
	return data;
}