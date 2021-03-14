import {useEffect, useState} from "react";
import {useTransition} from "react-spring";

export default (items) => {
  const [managedItems, setManagedItems] = useState([])

  useEffect(() => {
    setManagedItems([]) // incase items changes, altho that shouldnt happen
    items.forEach((item, itemIndex) => {
      setTimeout(() => {
        setManagedItems(mis => [...mis, item])
      }, itemIndex * 500)
    })
  }, [items, setManagedItems])

  const transitions = useTransition(managedItems, null, {
    from: {opacity: '0'},
    enter: {opacity: '1'},
  })

  return transitions
}