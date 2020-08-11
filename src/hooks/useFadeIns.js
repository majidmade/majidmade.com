import { useSprings } from 'react-spring';
import PropTypes from 'prop-types';
import SpringPropType from './springPropType';

export default (count,
	delay = 70) => useSprings(
	count,
	i => ({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: { duration: 1500 },
		delay: () => i * delay,
		reset: true
	})
);


export const FadePropType = PropTypes.shape({
	opacity: SpringPropType.isRequired
});