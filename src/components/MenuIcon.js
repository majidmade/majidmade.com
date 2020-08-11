import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { ContentPropType, ContentContext, IMAGES } from '../content';
import useGlow from '../hooks/useGlow';
import { FadePropType } from '../hooks/useFadeIns';
import { BouncePropType } from '../hooks/useBounces';

const MenuIcon = ({ content, setActiveContent, fadeStyles, bounceStyles }) => {
	const activeContent = useContext(ContentContext);
	const { glowStyles, bindGlowInteraction } = useGlow(content, activeContent, setActiveContent);
	const onClick = useCallback(() => 
		setActiveContent(content),
	[setActiveContent, content]
	);
	const { imgSrc, altText } = IMAGES[content];
	// so mobile doesnt try to download the images on long-press:
	const disableRightClick = useCallback(e => {
		e.preventDefault();
		e.stopPropagation();
		return false;
	}, []);

  
	return (
		<animated.img
			className='menu-icon'
			src={imgSrc}
			alt={altText}
			style={{  ...fadeStyles, ...glowStyles, ...bounceStyles }}
			onClick={onClick}
			onContextMenu={disableRightClick}
			{...bindGlowInteraction()}
		/>
	);

};

MenuIcon.propTypes = {
	content: ContentPropType.isRequired,
	setActiveContent: PropTypes.func.isRequired,
	fadeStyles: FadePropType.isRequired,
	bounceStyles: BouncePropType.isRequired,
};

export default MenuIcon;