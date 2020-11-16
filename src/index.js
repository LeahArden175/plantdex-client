import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router'
import {customHistory} from './history'
import './index.css';
import App from './App';

ReactDOM.render(
  <Router history={customHistory}>
    <App />
    </Router>, 
  document.getElementById('root')
);

