
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import PlantListPage from './PlantListPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><PlantListPage /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});