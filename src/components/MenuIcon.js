import React, { useCallback, useContext } from 'react';
import { animated } from 'react-spring';
import { ContentContext, IMAGES } from '../content';
import useGlow from '../hooks/useGlow'

export default ({ content, setActiveContent, fadeStyles, bounceStyles }) => {
  const activeContent = useContext(ContentContext);
  const { glowStyles, bindGlowInteraction } = useGlow(content, activeContent, setActiveContent);
  const setActiveContentToContent = useCallback(() => 
    setActiveContent(content),
    [setActiveContent, content]
  )

  const { imgSrc } = IMAGES[content];
  return (
    <animated.img
      className='menu-icon'
      src={imgSrc}
      style={{  ...fadeStyles, ...glowStyles, ...bounceStyles }}
      onClick={setActiveContentToContent}
      {...bindGlowInteraction()}
    />
  )

}