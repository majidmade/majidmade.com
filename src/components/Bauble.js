import React from 'react';
import { animated } from 'react-spring';
import { IMAGES } from '../content';
import useDrag from '../hooks/useDrag'

export default ({ bauble, baubleState, fadeStyles }) => {
  const { dragStyles, bindDragInteraction } = useDrag(bauble, baubleState);
  const { imgSrc } = IMAGES[bauble];

  return (
    <animated.img
      className='bauble'
      src={imgSrc}
      style={{  ...fadeStyles,...dragStyles }}
      {...bindDragInteraction()}
    />
  )

}