import './App.css';
import React, { useState, useMemo } from 'react';
import Background from './components/Background';
import Bauble from './components/Bauble';
import Title from './components/Title';
import { useFadeIns } from './hooks/useFadeIns';
import useBounces from './hooks/useBounces';
import content from './content';

function App() {
  const [activeContent, setActiveContent] = useState(null);
  const [fades] = useFadeIns(content.length);
  const [bounces] = useBounces(content.length);

  const baubles = useMemo(() => content.map((c, i) => [
    c, fades[i], bounces[i]
  ]), [bounces, fades])

  return (
    <div className="App">
      <div>
        <Background activeContent={activeContent} />
        <Title activeContent={activeContent} />
        <div className='bauble-container'>
          { baubles.map(([content, fade, bounce]) => (
            <Bauble
              key={content.toString()}
              content={content}
              activeContent={activeContent}
              setActiveContent={setActiveContent}
              fadeStyles={fade}
              bounceStyles={bounce}
            />
          )) }
        </div>
      </div>
    </div>
  );
}

export default App;
