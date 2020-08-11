import PropTypes from 'prop-types';

export default PropTypes.shape({
	children: PropTypes.array.isRequired,
	animatedStyles: PropTypes.object.isRequired,
	value: PropTypes.number.isRequired,
	startPosition: PropTypes.number.isRequired,
	lastPosition: PropTypes.number.isRequired,
	startTime: PropTypes.number.isRequired,
	done: PropTypes.bool 
});