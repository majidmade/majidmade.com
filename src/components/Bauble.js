import React from 'react';
import { animated } from 'react-spring';
import { IMAGES, COLORS } from '../content';

export default ({
  content,
  isActiveBauble = false,
  animation = {},
  interaction = () => ({})
}) => {
  const { imgSrc } = IMAGES[content];
  const { backgroundColor } = COLORS[content];
  return (
    <animated.img
      className='bauble'
      src={imgSrc}
      style={{
        border: isActiveBauble ? `6px solid ${backgroundColor}` : 'transparent',
        cursor: isActiveBauble ? 'grabbing' : 'grab',
        ...animation
      }}
      {...interaction()}
    />
  )

}