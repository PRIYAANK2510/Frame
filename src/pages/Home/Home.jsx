import HeroBanner from './HeroBanner/HeroBanner';
import './home.scss';
const Home = () => {
	return (
		<div className='homePage'>
			<HeroBanner />
			<div style={{ height: 2000 }}></div>
		</div>
	);
};
export default Home;
