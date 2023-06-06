import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi } from './api/api';
import PageRoutes from './routes/pageRoutes';
import { getApiConfiguration, getGenres } from './store/homeSlice';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		getApiConfig();
		genresCall();
	}, []);
	const getApiConfig = () => {
		fetchDataFromApi('/configuration').then((res) => {
			const url = {
				backdrop: res.images.secure_base_url + 'original',
				poster: res.images.secure_base_url + 'original',
				profile: res.images.secure_base_url + 'original',
			};
			dispatch(getApiConfiguration(url));
		});
	};

	const genresCall = async () => {
		let promises = [];
		let endPoints = ['movie', 'tv'];
		let allGenres = {};
		endPoints.forEach((url) => {
			promises.push(fetchDataFromApi(`/genre/${url}/list`));
		});
		const data = await Promise.all(promises);
		data.map(({ genres }) => {
			return genres.map((item) => (allGenres[item.id] = item));
		});
		dispatch(getGenres(allGenres));
	};

	return (
		<>
			<PageRoutes />
		</>
	);
}

export default App;
