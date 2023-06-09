import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import './error.scss';
const Error = () => {
	return (
		<div className='pageNotFound'>
			<ContentWrapper>
				<span className='bigText'>404</span>
				<span className='smallText'>Page not found!</span>
			</ContentWrapper>
		</div>
	);
};
export default Error;
