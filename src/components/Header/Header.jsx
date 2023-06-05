import { useEffect, useState } from 'react';
import { HiOutlineMenu } from 'react-icons/hi';
import { IoCloseOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5';
import { useLocation, useNavigate } from 'react-router-dom';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import './header.scss';

const Header = () => {
	const [show, setShow] = useState('top');
	const [lastScrollY, setLastScrollY] = useState(0);
	const [mobileMenu, setMobileMenu] = useState(false);
	const [query, setQuery] = useState('');
	const [showSearch, setShowSearch] = useState('');

	const navigate = useNavigate();
	const location = useLocation();

	const controlNavBar = () => {
		if (window.scrollY > 200) {
			if (window.scrollY > lastScrollY && !mobileMenu) {
				setShow('hide');
			} else {
				setShow('show');
			}
			setLastScrollY(window.scrollY);
		} else {
			setShow('top');
		}
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	useEffect(() => {
		window.addEventListener('scroll', controlNavBar);
		return () => {
			window.removeEventListener('scroll', controlNavBar);
		};
	}, [lastScrollY]);

	const openSearch = () => {
		setMobileMenu(false);
		setShowSearch(true);
	};
	const openMobileMenu = () => {
		setMobileMenu(true);
		setShowSearch(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (query.length > 0) {
			navigate(`/search/${query}`);
			setTimeout(() => {
				setShowSearch(false);
			}, 1000);
		}
	};
	const navigationHandler = (type) => {
		navigate(`/explore/${type}`);
		setMobileMenu(false);
	};

	return (
		<header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
			<ContentWrapper>
				<div
					className='logo'
					onClick={() => navigate('/')}
				>
					<img
						src='/logo.svg'
						alt=''
					/>
				</div>
				<ul className='menuItems'>
					<li
						className='menuItem'
						onClick={() => navigationHandler('movie')}
					>
						Movies
					</li>
					<li
						className='menuItem'
						onClick={() => navigationHandler('tv')}
					>
						TV Shows
					</li>
					{show === 'show' && (
						<li className='menuItem'>
							<IoSearchOutline onClick={openSearch} />
						</li>
					)}
				</ul>
				<div className='mobileMenuItems'>
					<IoSearchOutline onClick={openSearch} />
					{mobileMenu ? (
						<IoCloseOutline onClick={() => setMobileMenu(false)} />
					) : (
						<HiOutlineMenu onClick={openMobileMenu} />
					)}
				</div>
			</ContentWrapper>
			{showSearch && (
				<div className='searchBar'>
					<ContentWrapper>
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
							<IoCloseOutline onClick={() => setShowSearch(false)} />
						</form>
					</ContentWrapper>
				</div>
			)}
		</header>
	);
};
export default Header;
