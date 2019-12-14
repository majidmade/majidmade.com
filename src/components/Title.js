import React from 'react';
import { animated } from 'react-spring';
import useColor from '../hooks/useColor';
import { TITLES } from '../content';

export default ({ activeBauble }) => {
  const { title, subtitle } = TITLES[activeBauble] || { title: '', subtitle: '' }
  const { textColor } = useColor(activeBauble);
  return (
    <animated.div style={{ color: textColor }}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </animated.div>
  )
}