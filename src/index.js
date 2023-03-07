import React from 'react';
// Allows to hook react to html
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

// What this does is in the index.html doc you just render the entire
// app, (which you already know is the root to the react project)
// inside this divider with the Id 'root', super duper easy
ReactDOM.render(<App/>, document.getElementById('root'))