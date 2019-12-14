import { useSpring } from 'react-spring';
import { useGesture } from 'react-with-gesture';

export default (bauble, setActiveBauble) => {
  const [{ xy }, setXY] = useSpring(() => ({ xy: [0, 0] }))
  const bindDragInteraction = useGesture(({ event, down, delta }) => {
    event.preventDefault()
    setXY({ xy: down ? delta : [0,0] })
    setActiveBauble(bauble)
  })
  return {
    dragStyles: { 
      transform: xy.interpolate((x, y) => `translate(${x}px,${y}px)`),
    },
    bindDragInteraction
  }
}