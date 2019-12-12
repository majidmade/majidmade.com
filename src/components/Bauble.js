import React from 'react';
import { animated } from 'react-spring';

export default ({ 
  imgSrc,
  animation = {},
  interaction = () => ({})
}) => (
  <animated.img
    {...interaction()}
    className='bauble'
    style={{ ...animation }}
    src={imgSrc}
  />
)