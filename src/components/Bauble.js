import React from 'react';
import { animated } from 'react-spring';

export default ({ imgSrc, animation }) => (
  <animated.img
    style={{
      position: 'fixed',
      ...animation
    }}
    className='circular'
    src={imgSrc}
  />
)