import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Context from '../../Context'
import PlantList from './PlantList'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <PlantList plantInfo={[]}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});