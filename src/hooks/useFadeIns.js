import { useSprings } from 'react-spring';

const useFades = ({ reverse, count, delay }) => useSprings(
  count,
  i => ({ 
    from: { opacity: 0 },
    to: { opacity: 1 },
    reverse,
    config: { duration: 1500 },
    delay: () => i * delay,
    reset: true
  })
)

export const useFadeIns = (count, delay = 70) => useFades({ reverse: false, count, delay })
export const useFadeOuts = (count, delay = 70) => useFades({ reverse: true, count, delay })