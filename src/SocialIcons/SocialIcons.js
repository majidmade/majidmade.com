import React from 'react';
import {SocialIcon} from 'react-social-icons'
import './SocialIcons.css'

const SOCIAL_LINKS = [
  'https://www.twitter.com/majidrazvi',
  'https://www.linkedin.com/in/majidrazvi',
  'https://github.com/majidmade/majidmade.com/tree/master/src',
  'mailto:majidrazvi@gmail.com',
];

export default () => (
  <div className='social-icons'>
    <img
      className='avatar-icon rounded'
      src='/avatar_new_cropped.png'/>
    <div>{SOCIAL_LINKS.map(url => <SocialIcon url={url} fgColor='white'/>)}</div>
  </div>
)
