import './App.css';
import React, { useState } from 'react';
import { ContentContext } from './content';
import Background from './components/Background';
import Title from './components/Title';
import MainMenu from './components/MainMenu';

function App() {
  const [activeContent, setActiveContent] = useState(null);
  return (
    <div className="App">
      <div>
        <ContentContext.Provider value={activeContent}>
          <Background/>
          <Title/>
          <MainMenu setActiveContent={setActiveContent}/>
        </ContentContext.Provider>
      </div>
    </div>
  );
}

export default App;
