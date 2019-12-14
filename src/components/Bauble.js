import React from 'react';
import { animated } from 'react-spring';
import { IMAGES } from '../content';
import useDrag from '../hooks/useDrag'

export default ({ bauble, baubleState }) => {
  const [ , setActiveBauble ] = baubleState;
  const { dragStyles, bindDragInteraction } = useDrag(bauble, setActiveBauble);
  const { imgSrc } = IMAGES[bauble];

  return (
    <animated.img
      className='bauble'
      src={imgSrc}
      style={{ ...dragStyles }}
      {...bindDragInteraction()}
    />
  )

}