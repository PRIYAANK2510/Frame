import { useState } from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';

const TrendingMovie = () => {
	const [endpoint, setEndpoint] = useState('day');
	const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

	const onTabChange = (tab) => {
		setEndpoint(tab === 'Day' ? 'day' : 'week');
	};
	return (
		<div className='carouselSection'>
			<ContentWrapper>
				<span className='carouselTitle'>Trending Movies</span>
				<SwitchTabs
					data={['Day', 'Week']}
					onTabChange={onTabChange}
				/>
			</ContentWrapper>
			<Carousel
				endpoint={'movie'}
				data={data?.results}
				loading={loading}
			/>
		</div>
	);
};
export default TrendingMovie;
