import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import PlantBlock from './PlantBlock'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><PlantBlock /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});