import React, { useContext } from 'react';
import { animated } from 'react-spring';
import useColor from '../hooks/useColor';
import { ContentContext, TITLES, DESCRIPTIONS } from '../content';

export default () => {
  const activeContent = useContext(ContentContext);
  const { title, subtitle } = TITLES[activeContent];
  const { description } = DESCRIPTIONS[activeContent];
  const { textColor } = useColor(activeContent);
  return (
    <animated.div className="active-content" style={{ color: textColor }}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {/* <p>{description}</p> */}
    </animated.div>
  )
}