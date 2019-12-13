import './App.css';
import React, { useState } from 'react';
import Bauble from './components/Bauble';
import useDragWithState from './hooks/useDrag'
import HelpText from './components/HelpText';
import content from './content';

function App() {
  const { AVATAR, VCU, SAGE, PIVOTAL } = content;
  const [activeBauble, setActiveBauble] = useState(null);
  const useDrag = useDragWithState(setActiveBauble);

  return (
    <div className="App">
      <div className='bauble-container'>
        <Bauble content={AVATAR} isActiveBauble={activeBauble === AVATAR} {...useDrag(AVATAR)} />
        <Bauble content={VCU} isActiveBauble={activeBauble === VCU} {...useDrag(VCU)} />
        <Bauble content={SAGE} isActiveBauble={activeBauble === SAGE} {...useDrag(SAGE)} />
        <Bauble content={PIVOTAL} isActiveBauble={activeBauble === PIVOTAL} {...useDrag(PIVOTAL)} />
      </div>
      <HelpText isGrabbing={activeBauble} />
    </div>
  );
}

export default App;
