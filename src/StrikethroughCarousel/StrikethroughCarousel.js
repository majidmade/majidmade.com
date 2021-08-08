import React, { useEffect, useState } from 'react';
import { animated } from "react-spring";
import './StrikethroughCarousel.css'
import useCarousel from "./hooks/useCarousel";


const StrikethroughCarousel = ({items, msDelay = 0}) => {
  const transitions = useCarousel(items, msDelay)
  const [hidden, setHidden] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setHidden(false)
    }, msDelay)
  }, [msDelay])

  if (hidden) return null
  return (
    <div className='carousel'>
      {
        transitions.map(({item, props, key}, itemIndex) => (
            <animated.div
              key={key}
              className={`carousel-item ${itemIndex + 1 === items.length ? 'carousel-last-item' : ''}`}
              style={props}
            >
              {item}
            </animated.div>
          )
        )
      }
    </div>
  )
}

export default StrikethroughCarousel