import React, { useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { animated } from 'react-spring';
import { ContentPropType, IMAGES, ActiveContentContext } from '../content';
import useGlow from '../hooks/useGlow';
import useDisableContextMenu from '../hooks/useDisableContextMenu';
import { FadePropType } from '../hooks/useFadeIns';
import { BouncePropType } from '../hooks/useBounces';

const MenuIcon = ({ content, setActiveContent, setPreviewContent, fadeStyles, bounceStyles }) => {
	const { glowStyles, bindGlowInteraction } = useGlow(content);
	const activeContent = useContext(ActiveContentContext);

	const onClick = useCallback(() => {
		const isActiveContent = content === activeContent;
		setActiveContent(isActiveContent ? null : content) // toggle
	}, [setActiveContent, content, activeContent]);

	const onMouseOver = useCallback(() => {
		setPreviewContent(content)
	}, [setPreviewContent, content])

	const onMouseOut = useCallback(() => {
		setPreviewContent(null)
	}, [setPreviewContent])

	const disableContextMenu = useDisableContextMenu();

	return (
		<animated.img
			className='menu-icon'
			src={IMAGES[content].imgSrc}
			alt={IMAGES[content].altText}
			style={{  ...fadeStyles, ...glowStyles, ...bounceStyles }}
			onClick={onClick}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			{ ...disableContextMenu }
			{ ...bindGlowInteraction() }
		/>
	);

};

MenuIcon.propTypes = {
	content: ContentPropType.isRequired,
	setActiveContent: PropTypes.func.isRequired,
	setPreviewContent: PropTypes.func.isRequired,
	fadeStyles: FadePropType.isRequired,
	bounceStyles: BouncePropType.isRequired,
};

export default MenuIcon;