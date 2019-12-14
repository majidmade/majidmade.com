import { useTrail } from 'react-spring';
import baubles from '../content';

export default (activeBauble) => {
  const [intro, setIntro] = useTrail(baubles.length, () => ({ opacity: 0, config: { duration: 1500 } }))
  if (!activeBauble) {
    setIntro({ opacity: 1 })
  }
  return intro;
}