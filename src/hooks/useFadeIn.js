import { useTrail } from 'react-spring';
import content from '../content';

export default (activeContent) => {
  const [intro, setIntro] = useTrail(
    content.length,
    () => ({ opacity: 0, config: { duration: 1500 }})
  )
  if (!activeContent) {
    setIntro({ opacity: 1 })
  }
  return intro;
}