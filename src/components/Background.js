import React, { useContext } from 'react';
import { animated } from 'react-spring';
import useColor from '../hooks/useColor';
import useFadeIns from '../hooks/useFadeIns';
import { ActiveContentContext } from '../content';

const Background = () => {
	const { activeContent } = useContext(ActiveContentContext);
	const { backgroundColor } = useColor(activeContent);
	const [[opacity]] = useFadeIns(1);

	return (
		<animated.div
			data-testid='page-background'
			style={{
				position: 'absolute',
				zIndex: -1,
				left: 0,
				top: 0,
				bottom: 0,
				right: 0,
				backgroundColor,
			}}
		>
			<animated.h1
				style={{
					position: 'relative',
					top: '50%',
					transform: 'translateY(-50%)',
					textAlign: 'center',
					...opacity
				}}>
				{ activeContent ? '' : 'hi' }
			</animated.h1>
		</animated.div>
	);
};

export default Background;