import React, { useContext, useCallback } from 'react';
import { animated } from 'react-spring';
import { ContentPropType, IMAGES, ActiveContentContext, PreviewContentContext } from '../content';
import useGlow from '../hooks/useGlow';
import useDisableContextMenu from '../hooks/useDisableContextMenu';
import { FadePropType } from '../hooks/useFadeIns';
import { BouncePropType } from '../hooks/useBounces';

const MenuIcon = ({ content, fadeStyles, bounceStyles }) => {
	const { glowStyles, bindGlowInteraction } = useGlow(content);
	const { activeContent, setActiveContent } = useContext(ActiveContentContext);
	const { setPreviewContent } = useContext(PreviewContentContext);

	const onClick = useCallback(() => {
		const isActiveContent = content === activeContent;
		setActiveContent(isActiveContent ? null : content); // toggle
	}, [setActiveContent, content, activeContent]);

	const onMouseOver = useCallback(() => {
		setPreviewContent(content);
	}, [setPreviewContent, content]);

	const onMouseOut = useCallback(() => {
		setPreviewContent(null);
	}, [setPreviewContent]);

	const disableContextMenu = useDisableContextMenu();

	return (
		<animated.img
			className='menu-icon'
			src={IMAGES[content].imgSrc}
			alt={IMAGES[content].altText}
			style={{ ...fadeStyles, ...glowStyles, ...bounceStyles }}
			onClick={onClick}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			{...disableContextMenu}
			{...bindGlowInteraction()}
		/>
	);

};

MenuIcon.propTypes = {
	content: ContentPropType.isRequired,
	fadeStyles: FadePropType.isRequired,
	bounceStyles: BouncePropType.isRequired,
};

export default MenuIcon;