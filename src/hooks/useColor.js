import { useSpring } from 'react-spring';
import { COLORS } from '../content';

export default activeBauble => {
  const [{ backgroundColor }, setBackgroundColor] = useSpring(() => ({ backgroundColor: 'rgba(0, 0, 0, 0)' }))
  const [{ textColor }, setTextColor] = useSpring(() => ({ textColor: 'white' }))
  if (activeBauble) {
    setBackgroundColor({ backgroundColor:  COLORS[activeBauble].backgroundColor });
    setTextColor({ textColor:  COLORS[activeBauble].textColor });
  }
  return { backgroundColor, textColor }
}