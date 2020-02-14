import React from 'react';
import { animated } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import { useFadeIns } from '../hooks/useFadeIns';

const SOCIAL_LINKS = [
  'https://www.twitter.com/majidrazvi',
  'https://www.linkedin.com/in/majidrazvi',
  'https://github.com/majidmade/majidmade.com/tree/master/src',
]

export default () => {
  const [fades] = useFadeIns(3, 1000);
  return (
    <div className='social-media'>
      {
        SOCIAL_LINKS.map((url, i) => (
          <animated.span
            key={`${i}-social-link`}
            className='social-media-icon'
            style={{...fades[i]}}
          >
            <SocialIcon url={url}/>
          </animated.span>
        ))
      }  
    </div>
  )
}