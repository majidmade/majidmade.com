import { useSprings } from 'react-spring';

export default n => {
  const [ transformSprings ] = useSprings(
    n,
    i => ({ 
      from: { opacity: 0 },
      to: { opacity: 1 },
      config: { duration: 1500 },
      delay: () => i * 70
    })
  )

  return transformSprings;
}