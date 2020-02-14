import React from 'react';
import MenuIcon from './MenuIcon';
import useBouncesAndFades from '../hooks/useBouncesAndFades.js';
import { ALL_CONTENT } from '../content';

export default ({ setActiveContent }) => {
  const icons = useBouncesAndFades(ALL_CONTENT);
  return (
    <div className='main-menu'>
      {icons.map(([content, fade, bounce]) => (
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
