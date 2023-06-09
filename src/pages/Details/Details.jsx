import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Recommendation from './Carousel/Recommendation';
import Similar from './Carousel/Similar';
import Cast from './Cast/Cast';
import DetailBanner from './DetailsBanner/DetailBanner';
import VideoSection from './VideoSection/VideoSection';

const Details = () => {
	const { mediaType, id } = useParams();
	const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
	const { data: credits, loading: creditsLoading } = useFetch(
		`/${mediaType}/${id}/credits`
	);

	return (
		<div>
			<DetailBanner
				video={data?.results?.[0]}
				crew={credits?.crew}
			/>
			<Cast
				data={credits?.cast}
				loading={creditsLoading}
			/>
			{data?.results?.length && (
				<VideoSection
					data={data}
					loading={loading}
				/>
			)}
			<Similar
				mediaType={mediaType}
				id={id}
			/>
			<Recommendation
				mediaType={mediaType}
				id={id}
			/>
		</div>
	);
};
export default Details;
