import React from 'react';
import { animated } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import useBouncesAndFades from '../hooks/useBouncesAndFades.js';

const SOCIAL_LINKS = [
  'https://www.twitter.com/majidrazvi',
  'https://www.linkedin.com/in/majidrazvi',
  'https://github.com/majidmade/majidmade.com/tree/master/src',
]

export default () => {
  const icons = useBouncesAndFades(SOCIAL_LINKS);
  return (
    <div className='social-media'>
      {
        icons.map(([url, fade, bounce], i) => (
          <animated.span
            key={`${i}-social-link`}
            className='social-media-icon'
            style={{...fade, ...bounce }}
          >
            <SocialIcon url={url}/>
          </animated.span>
        ))
      }  
    </div>
  )
}