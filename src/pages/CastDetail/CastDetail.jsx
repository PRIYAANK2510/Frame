import CastBanner from './CastBanner/CastBanner';
import CastImage from './CastImage/CastImage';
import CastMovies from './CastMovies/CastMovies';
import CastTvSeries from './CastTvSeries/CastTvSeries';
import './castdetail.scss';
const CastDetail = () => {
	return (
		<div className='castDetail'>
			<CastBanner />
			<CastImage />
			<CastMovies />
			<CastTvSeries />
		</div>
	);
};
export default CastDetail;
