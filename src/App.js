import './App.css';
import React from 'react';
import Bauble from './components/Bauble';
import useDrag from './animations/useDrag'

const BAUBLE_DATA = {
  AVATAR: { imgSrc: '/avatar.jpg' },
  VCU: { imgSrc: '/vcu.png' },
  SAGE: { imgSrc: '/sage.png' },
  PIVOTAL: { imgSrc: '/pivotal.png' },
}

function App() {
  
  return (
    <div className="App">
      <div style={{ backgroundColor: 'hotpink', width: '100px', height: '100px' }}></div>
      <div className='bauble-container'>
        <Bauble {...useDrag(BAUBLE_DATA.AVATAR)} />
        <Bauble {...useDrag(BAUBLE_DATA.VCU)} />
        <Bauble {...useDrag(BAUBLE_DATA.SAGE)} />
        <Bauble {...useDrag(BAUBLE_DATA.PIVOTAL)} />
      </div>
    </div>
  );
}

export default App;
