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
  // so mobile doesnt try to download the images on long-press:
  const disableRightClick = useCallback(e => {
    e.preventDefault()
    e.stopPropagation()
    return false
  }, [])

  
  return (
    <animated.img
      className='menu-icon'
      src={imgSrc}
      style={{  ...fadeStyles, ...glowStyles, ...bounceStyles }}
      onClick={setActiveContentToContent}
      onContextMenu={disableRightClick}
      {...bindGlowInteraction()}
    />
  )

}