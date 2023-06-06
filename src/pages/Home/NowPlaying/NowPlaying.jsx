import { useState } from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/SwitchTabs/SwitchTabs';
import useFetch from '../../../hooks/useFetch';

const NowPlaying = () => {
	const [endpoint, setEndpoint] = useState('movie');
	const secondendpoint = endpoint === 'movie' ? 'now_playing' : 'on_the_air';
	const { data, loading } = useFetch(`/${endpoint}/${secondendpoint}`);

	const onTabChange = (tab) => {
		setEndpoint(tab === 'Movies' ? 'movie' : 'tv');
	};
	return (
		<div className='carouselSection'>
			<ContentWrapper>
				<span className='carouselTitle'>Now Playing</span>
				<SwitchTabs
					data={['Movies', 'TV Show']}
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
export default NowPlaying;
