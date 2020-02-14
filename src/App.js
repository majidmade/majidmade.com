import './App.css';
import React, { useState } from 'react';
import Background from './components/Background';
import Title from './components/Title';
import MainMenu from './components/MainMenu';

function App() {
  const [activeContent, setActiveContent] = useState(null);
  return (
    <div className="App">
      <div>
        <Background activeContent={activeContent} />
        <Title activeContent={activeContent} />
        <MainMenu
          activeContent={activeContent}
          setActiveContent={setActiveContent}
        />
      </div>
    </div>
  );
}

export default App;
