import { useState } from 'react';
import { useSpring } from 'react-spring';
import { useGesture } from 'react-with-gesture';

export default ({ imgSrc }) => {
  const [isGrabbing, setIsGrabbing] = useState(false);
  const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
  const interaction = useGesture(({ down, delta }) => {
    set({ xy: down ? delta : [0,0] })
    setIsGrabbing(down);
    // does this negate the dont-trigger-rerenders-benefit of react-spring?
    // oh well, dont over-optimize; deal with it if performance tanks <3
  })
  return {
    interaction,
    animation: { 
      transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`),
      cursor: isGrabbing ? 'grabbing' : 'grab'
    },
    imgSrc
  }
}