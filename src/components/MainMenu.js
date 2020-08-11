import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from './MenuIcon';
import useMenuIcons from '../hooks/useMenuIcons.js';
import { ALL_CONTENT } from '../content';

const MainMenu = ({ setActiveContent }) => {
	const icons = useMenuIcons(ALL_CONTENT);
	return (
		<div className='main-menu'>
			{icons.map(({ item: content, fade, bounce }) => (
				<MenuIcon
					key={content.toString()}
					content={content}
					setActiveContent={setActiveContent}
					fadeStyles={fade}
					bounceStyles={bounce}
				/>
			))}
		</div>
	);
};

MainMenu.propTypes = {
	setActiveContent: PropTypes.func.isRequired
};

export default MainMenu;