import { useSprings } from 'react-spring';

const useFades = ({ reverse, count }) => useSprings(
  count,
  i => ({ 
    from: { opacity: 0 },
    to: { opacity: 1 },
    reverse,
    config: { duration: 1500 },
    delay: () => i * 70,
    reset: true
  })
)

export const useFadeIns = count => useFades({ reverse: false, count })
export const useFadeOuts = count => useFades({ reverse: true, count })