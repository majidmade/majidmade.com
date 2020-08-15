import React from 'react';
import MenuIcon from './MenuIcon';
import useMenuIcons from '../hooks/useMenuIcons.js';
import { ALL_CONTENT } from '../content';

const MainMenu = () => {
	const icons = useMenuIcons(ALL_CONTENT);
	return (
		<div className='main-menu'>
			{icons.map(({ item: content, fade, bounce }) => (
				<MenuIcon
					key={content.toString()}
					content={content}
					fadeStyles={fade}
					bounceStyles={bounce}
				/>
			))}
		</div>
	);
};

export default MainMenu;