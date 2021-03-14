import React, {useState, useCallback} from 'react';
import {animated, useSpring, config} from 'react-spring'
import {SocialIcon} from 'react-social-icons'
import './SocialIcons.css'

const SOCIAL_LINKS = [
  'https://www.twitter.com/majidrazvi',
  'https://www.linkedin.com/in/majidrazvi',
  'https://github.com/majidmade/majidmade.com/tree/master/src',
];

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useSpring(() => ({ bottom: '-25vh', config: config.wobbly }), {})
  const toggleOpen = useCallback(() => {
    setPosition({bottom: isOpen ? '-25vh' : '0vh'})
    setIsOpen(!isOpen)
  }, [isOpen])

  return(
    <animated.div
      className='social-icons'
      style={{
        position: 'fixed',
        ...position
      }}
      onClick={toggleOpen}
    >
      <img
        className='avatar-icon rounded'
        src='/avatar_new_cropped.png'/>
      {SOCIAL_LINKS.map(url => <SocialIcon url={url} fgColor='white'/>)}
    </animated.div>
  )
}
