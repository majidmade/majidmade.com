import React from 'react';
import { animated } from 'react-spring';
import { IMAGES } from '../content';
import useGlow from '../hooks/useGlow'

export default ({ content, activeContent, setActiveContent, fadeStyles, bounceStyles }) => {
  const { glowStyles, bindGlowInteraction } = useGlow(content, activeContent, setActiveContent);
  const { imgSrc } = IMAGES[content];
  return (
    <animated.img
      className='bauble'
      src={imgSrc}
      style={{  ...fadeStyles, ...glowStyles, ...bounceStyles }}
      {...bindGlowInteraction()}
    />
  )

}