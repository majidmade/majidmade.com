import { useSpring } from 'react-spring';
import { COLORS } from '../content';

export default content => {
	const { backgroundColor }= useSpring({ backgroundColor: COLORS[content].backgroundColor });
	const { textColor } = useSpring({ textColor: COLORS[content].textColor });
	return { backgroundColor, textColor };
};