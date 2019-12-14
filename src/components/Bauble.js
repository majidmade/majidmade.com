import React from 'react';
import { animated } from 'react-spring';
import { IMAGES } from '../content';
import useDrag from '../hooks/useDrag'

export default ({ content, contentState, fadeStyles }) => {
  const { dragStyles, bindDragInteraction } = useDrag(content, contentState);
  const { imgSrc } = IMAGES[content];

  return (
    <animated.img
      className='bauble'
      src={imgSrc}
      style={{  ...fadeStyles,...dragStyles }}
      {...bindDragInteraction()}
    />
  )

}