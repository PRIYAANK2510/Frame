const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN = import.meta.env.VITE_TMDB_APIKEY;

const headers = {
	Authorization: 'bearer ' + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
	try {
		const response = fetch(BASE_URL + url, {
			headers,
			params,
		});
		return (await response).json();
	} catch (err) {
		console.log(err);
		return err;
	}
};
