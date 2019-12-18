import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const p = window.location.protocol;
if (p === 'http:' && document.domain !== 'localhost') {
  window.location.protocol = 'https:'
}

window.oncontextmenu = e => {
  // so mobile doesnt try to download the images on long-press
  e.preventDefault()
  e.stopPropagation()
  return false
}
ReactDOM.render(<App />, document.getElementById('root'));