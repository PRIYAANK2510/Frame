import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataFromApi } from './api/api';
import PageRoutes from './routes/pageRoutes';
import { getApiConfiguration, getGenres } from './store/homeSlice';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		getApiConfig();
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
	return (
		<>
			<PageRoutes />
		</>
	);
}

export default App;
