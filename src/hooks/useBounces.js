import { useSprings } from 'react-spring';

export default count => useSprings(
  count,
  n => ({
    from: { transform: 'translate(0, -10vh)' },
    to: { transform: 'translate(0, 0vh)' },
    config: { mass: 1, tension: 120, friction: 6, velocity: 5 },
    delay: () => n * 70
  })
)