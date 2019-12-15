import { useSprings } from 'react-spring';

export default n => {
  const [ transformSprings ] = useSprings(
    n,
    i => ({
      from: { transform: 'translate(0, -10vh)' },
      to: { transform: 'translate(0, 0vh)' },
      config: { mass: 1, tension: 120, friction: 3, velocity: 10 },
      delay: () => i * 70
    })
  )

  return transformSprings;
}