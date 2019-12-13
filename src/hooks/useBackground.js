import { useSpring } from 'react-spring';
import { BAUBLES } from '../content';

export default activeBauble => {
  const [{ backgroundColor }, setBackgroundColor] = useSpring(() => ({ backgroundColor: 'rgba(0, 0, 0, 0)' }))
  if (activeBauble) {
    setBackgroundColor({ backgroundColor:  BAUBLES[activeBauble].accentColor });
  }
  return { backgroundColor }
}