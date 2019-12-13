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
      <TitleText activeBauble={activeBauble}/>
      <div className='bauble-container'>
        <Bauble bauble={AVATAR} activeBauble={activeBauble} {...useDrag(AVATAR)} />
        <Bauble bauble={VCU} activeBauble={activeBauble} {...useDrag(VCU)} />
        <Bauble bauble={SAGE} activeBauble={activeBauble} {...useDrag(SAGE)} />
        <Bauble bauble={PIVOTAL} activeBauble={activeBauble} {...useDrag(PIVOTAL)} />
      </div>
    </div>
  );
}

export default App;
