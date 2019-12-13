import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.oncontextmenu = e => {
  // so mobile doesnt try to download the images on long-press
  e.preventDefault()
  e.stopPropagation()
  return false
}
ReactDOM.render(<App />, document.getElementById('root'));