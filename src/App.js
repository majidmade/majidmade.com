import './App.css';
import React, { useState } from 'react';
import Background from './components/Background';
import Bauble from './components/Bauble';
import TitleText from './components/TitleText';
import baubles from './content';

const { AVATAR, VCU, SAGE, PIVOTAL } = baubles;

function App() {
  const baubleState = useState(null);
  const [ activeBauble ] = baubleState;
  
  return (
    <div className="App">
      <Background activeBauble={activeBauble} />
      <TitleText activeBauble={activeBauble}/>
      <div className='bauble-container'>
        <Bauble bauble={AVATAR} baubleState={baubleState} />
        <Bauble bauble={VCU} baubleState={baubleState} />
        <Bauble bauble={SAGE} baubleState={baubleState} />
        <Bauble bauble={PIVOTAL} baubleState={baubleState} />
      </div>
    </div>
  );
}

export default App;
