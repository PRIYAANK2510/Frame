import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import avatar from '../../../assets/avatar.svg';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import LazyImage from '../../../components/LazyLoadImage/LazyImage';
import useFetch from '../../../hooks/useFetch';
import './cast.scss';

const Cast = ({ data, loading }) => {
	const { url } = useSelector((state) => state.home);
	const skeleton = () => {
		return (
			<div className='skItem'>
				<div className='circle skeleton'></div>
				<div className='row skeleton'></div>
				<div className='row2 skeleton'></div>
			</div>
		);
	};
	const navigate = useNavigate();
	return (
		<div className='castSection'>
			<ContentWrapper>
				<div className='sectionHeading'>Top Cast</div>
				{!loading ? (
					<div className='listItems'>
						{data?.map((item) => {
							let imgUrl = item.profile_path ? url.profile + item.profile_path : avatar;
							return (
								<div
									key={item.id}
									className='listItem'
									onClick={() => navigate(`/person/${item.id}`)}
								>
									<div className='profileImg'>
										<LazyImage src={imgUrl} />
									</div>
									<div className='name'>{item.name}</div>
									<div className='character'>{item.character}</div>
								</div>
							);
						})}
					</div>
				) : (
					<div className='castSkeleton'>
						{skeleton()}
						{skeleton()}
						{skeleton()}
						{skeleton()}
						{skeleton()}
						{skeleton()}
					</div>
				)}
			</ContentWrapper>
		</div>
	);
};
export default Cast;
