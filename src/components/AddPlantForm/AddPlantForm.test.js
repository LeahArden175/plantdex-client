import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

// import Context from '../../Context'
import AddPlantForm from './AddPlantForm'


it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><AddPlantForm /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});