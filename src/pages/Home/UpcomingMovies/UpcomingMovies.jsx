import Carousel from '../../../components/Carousel/Carousel';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import useFetch from '../../../hooks/useFetch';

const UpcomingMovies = () => {
	const { data, loading } = useFetch(`/movie/upcoming`);

	return (
		<div className='carouselSection'>
			<ContentWrapper>
				<span className='carouselTitle'>Upcoming Movies</span>
			</ContentWrapper>
			<Carousel
				endpoint={'movie'}
				data={data?.results}
				loading={loading}
			/>
		</div>
	);
};
export default UpcomingMovies;
