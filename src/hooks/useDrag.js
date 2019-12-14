import { useState } from 'react';
import { useSpring } from 'react-spring';
import { useGesture } from 'react-with-gesture';
import { COLORS } from '../content';

export default (bauble, baubleState) => {
  const [activeBauble, setActiveBauble ] = baubleState;
  const [isGrabbed, setIsGrabbed] = useState(false)
  const [{ xy }, setXY ] = useSpring(() => ({ xy: [0, 0] }))
  const [{ vh }, setVH ] = useSpring(() => ({ vh: '0vh' }))
  const bindDragInteraction = useGesture(({ event, down, delta }) => {
    event.preventDefault()
    setXY({ xy: down ? delta : [0,0] })
    setVH({ vh: down ? '4vh' : '1vh' })
    setActiveBauble(bauble)
    setIsGrabbed(down)
  })
  return {
    dragStyles: { 
      boxShadow: bauble === activeBauble
        ? vh.interpolate(vh => `0 0 ${vh} ${COLORS[bauble].textColor}`)
        : '',
      cursor: isGrabbed ? 'grabbing' : 'grab',
      transform: xy.interpolate((x, y) => `translate(${x}px,${y}px)`),
      zIndex: isGrabbed ? 1 : 0,
    },
    bindDragInteraction
  }
}