import { useSprings } from 'react-spring';
import content from '../content';

export default () => {
  const [ transform ] = useSprings(
    content.length,
    i => ({
      from: { transform: 'translate(0, -10vh)' },
      to: { transform: 'translate(0, 0vh)' },
      config: { mass: 1, tension: 120, friction: 3, velocity: 10 },
      delay: () => i * 70
    })
  )

  return transform;
}