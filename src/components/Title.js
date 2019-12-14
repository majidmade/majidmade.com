import React from 'react';
import { animated } from 'react-spring';
import useColor from '../hooks/useColor';
import { TITLES } from '../content';

export default ({ activeContent }) => {
  const { title, subtitle } = TITLES[activeContent] || { title: '', subtitle: '' }
  const { textColor } = useColor(activeContent);
  return (
    <animated.div style={{ color: textColor }}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </animated.div>
  )
}