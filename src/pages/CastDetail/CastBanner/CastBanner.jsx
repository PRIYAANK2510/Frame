import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NoAvatar from '../../../assets/avatar.svg';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import LazyImage from '../../../components/LazyLoadImage/LazyImage';
import useFetch from '../../../hooks/useFetch';
import './castbanner.scss';

const CastBanner = () => {
	const { id } = useParams();
	const { url } = useSelector((state) => state.home);
	const { data: info, loading: infoLoading } = useFetch(`/person/${id}`);
	return (
		<div className='castbanner'>
			{!infoLoading ? (
				<>
					{!!info && (
						<ContentWrapper>
							<div className='content'>
								<div className='left'>
									{info.profile_path ? (
										<LazyImage
											className='personImg'
											src={url.backdrop + info.profile_path}
										/>
									) : (
										<LazyImage
											className='personImg'
											src={NoAvatar}
										/>
									)}
								</div>
								<div className='right'>
									<div className='titleName'>{info.name}</div>
									<div className='birthday'>
										{dayjs(info.birthday).format('MMM D, YYYY')}
										{info.deathday
											? ` to ${dayjs(info.deathday).format('MMM D, YYYY')}`
											: ''}
									</div>

									<div className='overview'>
										<div className='heading'>Overview</div>
										<div className='description'>{info?.biography}</div>
									</div>
									<div className='info'>
										{info.place_of_birth && (
											<div className='infoItem'>
												<span className='text bold'>Place of Birth : </span>
												<span className='text'>{info.place_of_birth}</span>
											</div>
										)}
										{info.known_for_department && (
											<div className='infoItem'>
												<span className='text bold'>Known For : </span>
												<span className='text'>{info.known_for_department}</span>
											</div>
										)}
										{info.popularity && (
											<div className='infoItem'>
												<span className='text bold'>Popularity : </span>
												<span className='text'>{info.popularity.toFixed(2)}</span>
											</div>
										)}
									</div>
								</div>
							</div>
						</ContentWrapper>
					)}
				</>
			) : (
				<div className='castDetailsBannerSkeleton'>
					<ContentWrapper>
						<div className='left skeleton'></div>
						<div className='right'>
							<div className='row skeleton'></div>
							<div className='row skeleton'></div>
							<div className='row skeleton'></div>
							<div className='row skeleton'></div>
							<div className='row skeleton'></div>
							<div className='row skeleton'></div>
							<div className='row skeleton'></div>
						</div>
					</ContentWrapper>
				</div>
			)}
		</div>
	);
};
export default CastBanner;
