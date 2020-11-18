import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import PlantItem from './PlantItem'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><PlantItem /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});