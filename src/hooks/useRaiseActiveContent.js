import { useContext } from 'react';
import { useSpring } from 'react-spring';
import { ActiveContentContext } from '../content';

export default content => {
  const activeContent = useContext(ActiveContentContext);
  const isActiveContent = content === activeContent;
  return useSpring({ 
    transform: `translate(0, ${isActiveContent ? '-5' : '0'}vh)`
  })
}