import React from 'react';
import { animated } from 'react-spring';
import useColor from '../hooks/useColor';
import { BULLETS } from '../content';

export default ({ activeContent }) => {
  const bullets = BULLETS[activeContent];
  if (!bullets) return null;
  const { textColor } = useColor(activeContent);
  return (
    <animated.ul style={{ color: textColor }}>
      {BULLETS[activeContent].map(b => <li>{b}</li>)}
    </animated.ul>
  )
}
