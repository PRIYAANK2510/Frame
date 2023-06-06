import HeroBanner from './HeroBanner/HeroBanner';
import NowPlaying from './NowPlaying/NowPlaying';
import Popular from './Popular/Popular';
import TopRated from './TopRated/TopRated';
import TrendingMovie from './Trending/TrendingMovie';
import TrendingTV from './Trending/TrendingTV';
import UpcomingMovies from './UpcomingMovies/UpcomingMovies';
import './home.scss';
const Home = () => {
	return (
		<div className='homePage'>
			<HeroBanner />
			<TrendingMovie />
			<TrendingTV />
			<NowPlaying />
			<Popular />
			<UpcomingMovies />
			<TopRated />
		</div>
	);
};
export default Home;
