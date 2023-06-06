import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../../../components/ContentWrapper/ContentWrapper';
import LazyImage from '../../../components/LazyLoadImage/LazyImage';
import useFetch from '../../../hooks/useFetch';
import './HeroBanner.scss';

const HeroBanner = () => {
	const { url } = useSelector((state) => state.home);

	const [background, setBackground] = useState('');
	const [query, setQuery] = useState('');
	const navigate = useNavigate();
	const { data, loading } = useFetch('/movie/now_playing');

	useEffect(() => {
		const bg =
			url?.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
		setBackground(bg);
	}, [data, url]);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (query.length > 0) {
			navigate(`/search/${query}`);
		}
	};

	return (
		<div className='heroBanner'>
			{!loading && (
				<div className='backdrop_img'>
					<LazyImage src={background} />
				</div>
			)}
			<div className='opacity_layer'></div>
			<ContentWrapper>
				<div className='heroBannerContent'>
					<span className='title'>Welcome</span>
					<span className='subtitle'>
						Discover Million of Movies, TV shows and your next Binge watch
					</span>
					<form
						className='searchInput'
						onSubmit={handleSubmit}
					>
						<input
							type='text'
							placeholder='Search for a movie or TV show...'
							value={query}
							onChange={(e) => setQuery(e.target.value)}
							required
						/>
						<button>Search</button>
					</form>
				</div>
			</ContentWrapper>
		</div>
	);
};
export default HeroBanner;
