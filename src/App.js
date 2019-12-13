import './App.css';
import React, { useState } from 'react';
import Background from './components/Background';
import Bauble from './components/Bauble';
import TitleText from './components/TitleText';
import useDragWithState from './hooks/useDrag'
import content from './content';


function App() {
  const { AVATAR, VCU, SAGE, PIVOTAL } = content;
  const [activeBauble, setActiveBauble] = useState(null);
  const useDrag = useDragWithState(setActiveBauble);

  return (
    <div className="App">
      <Background activeBauble={activeBauble} />
      { activeBauble ? <TitleText activeBauble={activeBauble}/> : null }
      <div className='bauble-container'>
        <Bauble content={AVATAR} isActiveBauble={activeBauble === AVATAR} {...useDrag(AVATAR)} />
        <Bauble content={VCU} isActiveBauble={activeBauble === VCU} {...useDrag(VCU)} />
        <Bauble content={SAGE} isActiveBauble={activeBauble === SAGE} {...useDrag(SAGE)} />
        <Bauble content={PIVOTAL} isActiveBauble={activeBauble === PIVOTAL} {...useDrag(PIVOTAL)} />
      </div>
    </div>
  );
}

export default App;
