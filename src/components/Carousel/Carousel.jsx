import dayjs from 'dayjs';
import { useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NoMovie from '../../assets/no_movie.svg';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import LazyImage from '../LazyLoadImage/LazyImage';
import CircleRating from '../circleRating/CircleRating';
import Genres from '../genres/Genres';
import './carousel.scss';

const Carousel = ({ data, loading, endpoint }) => {
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
					<div className='date skeleton'></div>
				</div>
			</div>
		);
	};

	return (
		<div className='carousel'>
			<ContentWrapper>
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
						{data?.map((item) => {
							const posterUrl = item.poster_path
								? url.poster + item.poster_path
								: NoMovie;
							return (
								<div
									className='carouselItem'
									onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}
									key={item.id}
								>
									<div className='posterBlock'>
										<LazyImage
											src={posterUrl}
											alt='movie_poster'
										/>
										<CircleRating rating={item.vote_average.toFixed(1)} />
										<Genres data={item.genre_ids.slice(0, 2)} />
									</div>
									<div className='textBlock'>
										<span className='title'>{item.title || item.name}</span>
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
	);
};
export default Carousel;
