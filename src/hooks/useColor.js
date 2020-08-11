import { useSpring } from 'react-spring';
import { COLORS } from '../content';

export default activeContent => {
	const [{ backgroundColor }, setBackgroundColor] = useSpring(() => ({ backgroundColor: 'white' }));
	const [{ textColor }, setTextColor] = useSpring(() => ({ textColor: 'white' }));
	if (activeContent) {
		setBackgroundColor({ backgroundColor:  COLORS[activeContent].backgroundColor });
		setTextColor({ textColor:  COLORS[activeContent].textColor });
	}
	return { backgroundColor, textColor };
};