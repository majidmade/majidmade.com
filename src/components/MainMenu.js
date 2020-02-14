import React from 'react';
import MenuIcon from './MenuIcon';
import useBouncesAndFades from '../hooks/useBouncesAndFades.js';
import { allContent } from '../content';

export default ({ setActiveContent }) => {
  const icons = useBouncesAndFades(allContent);
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
