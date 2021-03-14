import React from 'react';
import {animated} from "react-spring";
import './StrikethroughCarousel.css'
import useCarousel from "./hooks/useCarousel";

export default ({items}) => {

  const transitions = useCarousel(items)

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