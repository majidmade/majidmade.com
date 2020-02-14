import React, { useMemo } from 'react';
import MenuIcon from './MenuIcon';
import { useFadeIns } from '../hooks/useFadeIns';
import useBounces from '../hooks/useBounces';
import { allContent } from '../content';

export default ({ setActiveContent }) => {
  const [fades] = useFadeIns(allContent.length);
  const [bounces] = useBounces(allContent.length);

  const icons = useMemo(() => allContent.map((c, i) => [
    c, fades[i], bounces[i]
  ]), [bounces, fades]);

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
