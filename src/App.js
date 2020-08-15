import './App.css';
import React, { useState } from 'react';
import { ActiveContentContext, PreviewContentContext } from './content';
import Background from './components/Background';
import ActiveContent from './components/ActiveContent';
import MainMenu from './components/MainMenu';
import SocialMedia from './components/SocialMedia';

function App() {
	const [activeContent, setActiveContent] = useState(null);
	const [previewContent, setPreviewContent] = useState(null);
	return (
		<div className="App">
			<div className="center-column">
				<ActiveContentContext.Provider value={{ activeContent, setActiveContent }}>
					<PreviewContentContext.Provider value={{ previewContent, setPreviewContent }}>
						<Background/>
						<ActiveContent/>
						<MainMenu/>
						<SocialMedia/>
					</PreviewContentContext.Provider>
				</ActiveContentContext.Provider>
			</div>
		</div>
	);
}

export default App;
