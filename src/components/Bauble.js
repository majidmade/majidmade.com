import React from 'react';
import { animated } from 'react-spring';
import { IMAGES, COLORS } from '../content';

export default ({
  bauble,
  activeBauble,
  animation = {},
  interaction = () => ({})
}) => {
  const isActiveBauble = bauble === activeBauble;
  const { imgSrc } = IMAGES[bauble];
  const { backgroundColor } = COLORS[bauble];
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