import React, {useMemo} from 'react';
import { animated } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import useFadeIns from '../hooks/useFadeIns';
import useBounces from '../hooks/useBounces';

const SOCIAL_LINKS = [
  'https://www.twitter.com/majidrazvi',
  'https://www.linkedin.com/in/majidrazvi',
  'https://github.com/majidmade/majidmade.com/tree/master/src',
]

export default () => {
  const [fades] = useFadeIns(SOCIAL_LINKS.length);
  const [bounces] = useBounces(SOCIAL_LINKS.length);

  const icons = useMemo(() => SOCIAL_LINKS.map((url, i) => [
    url, fades[i], bounces[i]
  ]), [bounces, fades]);
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