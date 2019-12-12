import React from 'react';
import { useSpring } from 'react-spring';
import './App.css';
import Bauble from './components/Bauble';


function App() {
  const peek = useSpring({
    from: {top: '-30%'},
    to: {top: '-10%'},
    config: {
      velocity: 2,
      mass: 10
    }
  })
  return (
    <div className="App">
      <Bauble imgSrc='/avatar_lights.jpg' animation={peek} />
    </div>
  );
}

export default App;
