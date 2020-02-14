import './App.css';
import React, { useState } from 'react';
import { ContentContext } from './content';
import Background from './components/Background';
import ActiveContent from './components/ActiveContent';
import MainMenu from './components/MainMenu';
import SocialMedia from './components/SocialMedia';

function App() {
  const [activeContent, setActiveContent] = useState(null);
  return (
    <div className="App">
      <div className="center-column">
        <ContentContext.Provider value={activeContent}>
          <Background/>
          <ActiveContent/>
          <MainMenu setActiveContent={setActiveContent}/>
          <SocialMedia/>
        </ContentContext.Provider>
      </div>
    </div>
  );
}

export default App;
