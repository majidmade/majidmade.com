import { useState } from 'react';
import { useSpring } from 'react-spring';
import { useGesture } from 'react-with-gesture';

export default (bauble, setActiveBauble) => {
  const [isGrabbed, setIsGrabbed] = useState(false)
  const [{ xy }, setXY] = useSpring(() => ({ xy: [0, 0] }))
  const bindDragInteraction = useGesture(({ event, down, delta }) => {
    event.preventDefault()
    setXY({ xy: down ? delta : [0,0] })
    setActiveBauble(bauble)
    setIsGrabbed(down)
  })
  return {
    dragStyles: { 
      cursor: isGrabbed ? 'grabbing' : 'grab',
      zIndex: isGrabbed ? 1 : 0,
      transform: xy.interpolate((x, y) => `translate(${x}px,${y}px)`),
    },
    bindDragInteraction
  }
}