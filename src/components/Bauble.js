import React from 'react';
import { animated } from 'react-spring';
import { IMAGES, COLORS } from '../content';
import useDrag from '../hooks/useDrag'

export default ({ bauble, baubleState }) => {
  const [ activeBauble, setActiveBauble ] = baubleState;
  const { animation, interaction } = useDrag(bauble, setActiveBauble);
  const { imgSrc } = IMAGES[bauble];
  const { backgroundColor } = COLORS[bauble];
  const isActiveBauble = bauble === activeBauble;

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