import React from 'react';
import {SocialIcon} from 'react-social-icons'
import './SocialIcons.css'

const SOCIAL_LINKS = [
  'https://www.twitter.com/majidrazvi',
  'https://www.linkedin.com/in/majidrazvi',
  'https://github.com/majidmade/majidmade.com',
  'mailto:majidrazvi@gmail.com',
];

const SocialIcons = () => (
  <div className='social-icons'>
    <img
      className='avatar-icon rounded'
      src='/avatar_new_cropped.png'
      alt=''
    />
    <div>{
      SOCIAL_LINKS.map(url => (
        <SocialIcon
          key={url}
          url={url}
          fgColor='white'
        />
      ))
    }</div>
  </div>
)

export default SocialIcons