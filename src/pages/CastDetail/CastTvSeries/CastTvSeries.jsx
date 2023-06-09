import dayjs from 'dayjs';
import { useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import NoMovie from '../../../assets/no_movie.svg';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import Genres from '../../../components/Genres/Genres';
import LazyImage from '../../../components/LazyLoadImage/LazyImage';
import useFetch from '../../../hooks/useFetch';
import './casttvseries.scss';

const CastTvSeries = () => {
	const { id } = useParams();
	const { data, loading } = useFetch(`/person/${id}/tv_credits`);
	const carouselContainer = useRef();
	const { url } = useSelector((state) => state.home);
	const navigate = useNavigate();

	const navigation = (dir) => {
		const container = carouselContainer.current;
		const scrollAmount =
			dir === 'left'
				? container.scrollLeft - (container.offsetWidth + 20)
				: container.scrollLeft + (container.offsetWidth + 20);

		container.scrollTo({
			left: scrollAmount,
			behavior: 'smooth',
		});
	};
	const skItem = () => {
		return (
			<div className='skeletonItem'>
				<div className='posterBlock skeleton'></div>
				<div className='textBlock'>
					<div className='title skeleton'></div>
					<div className='character skeleton'></div>
					<div className='date skeleton'></div>
				</div>
			</div>
		);
	};

	return (
		<>
			{data?.cast?.length && (
				<div className='castTvSeries'>
					<ContentWrapper>
						{<div className='carouselTitle'>Appeared in Series</div>}
						<SlArrowLeft
							className='carouselLeftNav arrow'
							onClick={() => navigation('left')}
						/>
						<SlArrowRight
							className='carouselRightNav arrow'
							onClick={() => navigation('right')}
						/>
						{!loading ? (
							<div
								className='carouselItems'
								ref={carouselContainer}
							>
								{data?.cast?.map((item) => {
									const posterUrl = item.poster_path
										? url.poster + item.poster_path
										: NoMovie;
									return (
										<div
											className='carouselItem'
											onClick={() => navigate(`/tv/${item.id}`)}
											key={item.id}
										>
											<div className='posterBlock'>
												<LazyImage
													src={posterUrl}
													alt='movie_poster'
												/>
												<Genres data={item.genre_ids.slice(0, 2)} />
											</div>
											<div className='textBlock'>
												<span className='title'>{item.title || item.name}</span>
												<span className='character'>{item.character}</span>
												<span className='date'>
													{dayjs(item.release_Date).format('MMM D, YYYY')}
												</span>
											</div>
										</div>
									);
								})}
							</div>
						) : (
							<div className='loadingSkeleton'>
								{skItem()}
								{skItem()}
								{skItem()}
								{skItem()}
								{skItem()}
								{skItem()}
							</div>
						)}
					</ContentWrapper>
				</div>
			)}
		</>
	);
};
export default CastTvSeries;
