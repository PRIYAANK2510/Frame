import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
import './footer.scss';
const Footer = () => {
	return (
		<footer className='footer'>
			<ContentWrapper>
				<ul className='menuItems'>
					<li className='menuItem'>Terms Of Use</li>
					<li className='menuItem'>Privacy-Policy</li>
					<li className='menuItem'>About</li>
					<li className='menuItem'>Blog</li>
					<li className='menuItem'>FAQ</li>
				</ul>
				<div className='infoText'>
					Grab your popcorn, find a cozy spot on the virtual couch, and get ready for a
					movie experience that's as unique as you are. Join us on this quirky journey,
					and let's celebrate the magic of the silver screen together!
				</div>
				<div className='socialIcons'>
					<a
						className='icon'
						href='https://github.com/PRIYAANK2510'
						target='_blank'
					>
						<AiFillGithub />
					</a>
					<a
						className='icon'
						href='https://www.linkedin.com/in/priyaank-25102000/'
						target='_blank'
					>
						<AiFillLinkedin />
					</a>
				</div>
			</ContentWrapper>
		</footer>
	);
};
export default Footer;
