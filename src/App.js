import './App.css';
import React, { useState, useMemo } from 'react';
import Background from './components/Background';
import Bauble from './components/Bauble';
import Title from './components/Title';
import useFadeIn from './hooks/useFadeIn';
import useBounce from './hooks/useBounce';
import content from './content';

function App() {
  const [activeContent, setActiveContent] = useState(null);
  const fades = useFadeIn();
  const bounces = useBounce();

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
