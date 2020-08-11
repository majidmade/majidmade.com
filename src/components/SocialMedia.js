import React from 'react';
import { animated } from 'react-spring';
import { SocialIcon } from 'react-social-icons';
import useMenuIcons from '../hooks/useMenuIcons.js';

const SOCIAL_LINKS = [
	'https://www.twitter.com/majidrazvi',
	'https://www.linkedin.com/in/majidrazvi',
	'https://github.com/majidmade/majidmade.com/tree/master/src',
];

const SocialMedia = () => {
	const icons = useMenuIcons(SOCIAL_LINKS);
	return (
		<div className='social-media'>
			{
				icons.map(({ item: url, fade, bounce }, i) => (
					<animated.span
						key={`${i}-social-link`}
						className='social-media-icon'
						style={{...fade, ...bounce }}
					>
						<SocialIcon url={url} fgColor='white'/>
					</animated.span>
				))
			}  
		</div>
	);
};

export default SocialMedia;