import './App.css';
import React, { useState } from 'react';
import Background from './components/Background';
import Bauble from './components/Bauble';
import Title from './components/Title';
import useFadeIn from './hooks/useFadeIn';
import content from './content';

function App() {
  const contentState = useState(null);
  const [activeContent] = contentState;
  const fadeIns = useFadeIn(activeContent);

  return (
    <div className="App">
      <div>
        <Background activeContent={activeContent} />
        <Title activeContent={activeContent} />
        <div className='bauble-container'>
          { fadeIns.map((f, i) => (
            <Bauble
              key={content[i].toString()}
              content={content[i]}
              contentState={contentState}
              fadeStyles={f}
            />
          )) }
        </div>
      </div>
    </div>
  );
}

export default App;
