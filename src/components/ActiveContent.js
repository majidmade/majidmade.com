import React, { useContext } from 'react';
import { animated } from 'react-spring';
import useColor from '../hooks/useColor';
import useRaiseActiveContent from '../hooks/useRaiseActiveContent';
import { ActiveContentContext, TITLES } from '../content';

const ActiveContent = () => {
	const activeContent = useContext(ActiveContentContext);
	const { title, subtitle } = TITLES[activeContent];
	const { textColor } = useColor(activeContent);
	const raise = useRaiseActiveContent(activeContent);
	return (
		<animated.div className="active-content" style={{ opacity: 1, color: textColor, ...raise }}>
			<h1>{title}</h1>
			<h3>{subtitle}</h3>
		</animated.div>
	);
};

export default ActiveContent;