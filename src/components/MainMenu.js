import React, { useContext, useMemo } from 'react';
import Bauble from './Bauble';
import { useFadeIns } from '../hooks/useFadeIns';
import useBounces from '../hooks/useBounces';
import { ContentContext, allContent } from '../content';

export default ({ setActiveContent }) => {
  const activeContent = useContext(ContentContext);
  const [fades] = useFadeIns(allContent.length);
  const [bounces] = useBounces(allContent.length);

  const baubles = useMemo(() => allContent.map((c, i) => [
    c, fades[i], bounces[i]
  ]), [bounces, fades]);

  return (
    <div className='bauble-container'>
      {baubles.map(([content, fade, bounce]) => (
        <Bauble
          key={content.toString()}
          content={content}
          activeContent={activeContent}
          setActiveContent={setActiveContent}
          fadeStyles={fade}
          bounceStyles={bounce}
        />
      ))}
    </div>
  );
};
