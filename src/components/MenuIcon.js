import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { ContentPropType, IMAGES } from '../content';
import useGlow from '../hooks/useGlow';
import useDisableContextMenu from '../hooks/useDisableContextMenu';
import { FadePropType } from '../hooks/useFadeIns';
import { BouncePropType } from '../hooks/useBounces';

const MenuIcon = ({ content, setActiveContent, fadeStyles, bounceStyles }) => {
	const { glowStyles, bindGlowInteraction } = useGlow(content);

	const onClick = useCallback(() => 
		setActiveContent(content),
		[setActiveContent, content]
	);

	const disableContextMenu = useDisableContextMenu();

	return (
		<animated.img
			className='menu-icon'
			src={IMAGES[content].imgSrc}
			alt={IMAGES[content].altText}
			style={{  ...fadeStyles, ...glowStyles, ...bounceStyles }}
			onClick={onClick}
			{ ...disableContextMenu }
			{ ...bindGlowInteraction() }
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