import React from 'react';
import { animated } from 'react-spring';
import useTextColor from '../hooks/useColor';
import { TITLES } from '../content';

export default ({ activeBauble }) => {
  const { title, subtitle } = TITLES[activeBauble] || { title: '', subtitle: '' }
  const { textColor } = useTextColor(activeBauble);
  return (
    <animated.div style={{ color: textColor }}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </animated.div>
  )
}