import { useSelector } from 'react-redux';
import './genres.scss';

const Genres = ({ data }) => {
	const { genres } = useSelector((state) => state.home);
	return (
		<div className='genres'>
			{data?.map((gen) => {
				if (!genres[gen]?.name) return;
				return (
					<div
						key={gen}
						className='genre'
					>
						{genres[gen]?.name}
					</div>
				);
			})}
		</div>
	);
};
export default Genres;
