import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Details from '../pages/Details/Details';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import SearchResult from '../pages/SearchResult/SearchResult';
import { routes } from './routes';

const PageRoutes = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path={routes.HOME}
					element={<Home />}
				/>
				<Route
					path={routes.SEARCH_RESULT}
					element={<SearchResult />}
				/>
				<Route
					path={routes.DETAILS}
					element={<Details />}
				/>
				<Route
					path={routes.ERROR}
					element={<Error />}
				/>
			</Routes>
			<Footer />
		</>
	);
};
export default PageRoutes;
