import { useState } from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';

const TopRated = () => {
	const [endpoint, setEndpoint] = useState('movie');
	const { data, loading } = useFetch(`/${endpoint}/top_rated`);

	const onTabChange = (tab) => {
		setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
	};
	return (
		<div className='carouselSection'>
			<ContentWrapper>
				<span className='carouselTitle'>Top Rated</span>
				<SwitchTabs
					data={['Movies', 'TV Shows']}
					onTabChange={onTabChange}
				/>
			</ContentWrapper>
			<Carousel
				endpoint={endpoint}
				data={data?.results}
				loading={loading}
			/>
		</div>
	);
};
export default TopRated;
