import Carousel from '../../../components/Carousel/Carousel';
import useFetch from '../../../hooks/useFetch';

const Recommendation = ({ mediaType, id }) => {
	const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);
	return (
		<>
			{data?.results?.length && (
				<Carousel
					title='Recommendations'
					data={data?.results}
					loading={loading}
					endpoint={mediaType}
				/>
			)}
		</>
	);
};
export default Recommendation;
