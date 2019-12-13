import React from 'react';
import { animated } from 'react-spring';
import { BAUBLES } from '../content';

export default ({
  content,
  isActiveBauble = false,
  animation = {},
  interaction = () => ({})
}) => {
  const { imgSrc, accentColor } = BAUBLES[content];
  return (
    <animated.img
      className='bauble'
      src={imgSrc}
      style={{
        border: isActiveBauble ? `6px solid ${accentColor}` : 'transparent',
        cursor: isActiveBauble ? 'grabbing' : 'grab',
        ...animation
      }}
      {...interaction()}
    />
  )

}