import './App.css';
import React, { useState } from 'react';
import Background from './components/Background';
import Bauble from './components/Bauble';
import Title from './components/Title';
import useFadeIn from './hooks/useFadeIn';
import baubles from './content';

function App() {
  const baubleState = useState(null);
  const [activeBauble] = baubleState;
  const fadeIns = useFadeIn(activeBauble);

  return (
    <div className="App">
      <div>
        <Background activeBauble={activeBauble} />
        <Title activeBauble={activeBauble} />
        <div className='bauble-container'>
          { fadeIns.map((f, i) => (
            <Bauble
              key={baubles[i].toString()}
              bauble={baubles[i]}
              baubleState={baubleState}
              fadeStyles={f}
            />
          )) }
        </div>
      </div>
    </div>
  );
}

export default App;
