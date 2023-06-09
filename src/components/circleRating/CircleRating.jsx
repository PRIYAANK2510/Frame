import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './rating.scss';

const CircleRating = ({ rating, max = 10 }) => {
	const percent = (rating / max) * 100;
	return (
		<div className='circleRating'>
			<CircularProgressbar
				value={rating}
				maxValue={max}
				text={rating}
				styles={buildStyles({
					pathColor: percent < 50 ? 'red' : percent < 70 ? 'orange' : 'green',
				})}
			/>
		</div>
	);
};
export default CircleRating;
