import React, {useState, useEffect} from 'react';
import {animated, useTransition} from "react-spring";
import './StrikethroughCarousel.css'

export default ({items}) => {

  // TODO: crack out into custom hook
  const [managedItems, setManagedItems] = useState([])

  useEffect(() => {
    setManagedItems([]) // incase items changes, altho that shouldnt happen
    items.forEach((item, itemIndex) => {
      setTimeout(() => {
        setManagedItems(mis => [...mis, item])
      }, itemIndex * 1250)
    })
  }, [items, setManagedItems])

  const transitions = useTransition(managedItems, null, {
    from: {opacity: '0'},
    enter: {opacity: '1'},
  })

  return (
   <div className='carousel'>
     {
       transitions.map(({item, props, key}, itemIndex) =>
         <animated.div key={key}
                       className={`carousel-item ${itemIndex + 1 === items.length ? 'carousel-last-item' : ''}`}
                       style={props}
         >
           {item}
         </animated.div>
       )
     }
   </div>
  )
}