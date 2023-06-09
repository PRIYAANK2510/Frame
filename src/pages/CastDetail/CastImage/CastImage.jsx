import { useRef } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NoImage from '../../../assets/avatar.svg';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import LazyImage from '../../../components/LazyLoadImage/LazyImage';
import useFetch from '../../../hooks/useFetch';
import './castimage.scss';
const CastImage = () => {
	const { id } = useParams();
	const { data, loading } = useFetch(`/person/${id}/images`);
	const carouselContainer = useRef();
	const { url } = useSelector((state) => state.home);
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
			</div>
		);
	};

	return (
		<>
			{data?.profiles?.length && (
				<div className='castImage'>
					<ContentWrapper>
						{<div className='carouselTitle'>Images</div>}
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
								{data?.profiles?.map((item, index) => {
									const image = item.file_path ? url.poster + item.file_path : NoImage;
									return (
										<a
											className='carouselItem'
											target='_blank'
											href={image}
											key={`img${index}`}
										>
											<div className='posterBlock'>
												<LazyImage
													src={image}
													alt='image'
												/>
											</div>
										</a>
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
export default CastImage;
