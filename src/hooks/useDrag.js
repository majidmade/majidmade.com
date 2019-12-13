import { useSpring } from 'react-spring';
import { useGesture } from 'react-with-gesture';

export default setActiveBauble => bauble => {
  const [{ xy }, setXY] = useSpring(() => ({ xy: [0, 0] }))
  const interaction = useGesture(({ event, down, delta }) => {
    event.preventDefault()
    setXY({ xy: down ? delta : [0,0] })
    setActiveBauble(down ? bauble : null)
  })
  return {
    animation: { 
      transform: xy.interpolate((x, y) => `translate(${x}px,${y}px)`),
    },
    interaction
  }
}