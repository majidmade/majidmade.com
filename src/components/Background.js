import React from 'react';
import { animated } from 'react-spring';
import useColor from '../hooks/useColor';

export default ({ activeBauble }) => {
  const { backgroundColor } = useColor(activeBauble);
  return (
    <animated.div
      style={{
        position: 'absolute',
        zIndex: -1,
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        backgroundColor
      }}
    />
  )
}