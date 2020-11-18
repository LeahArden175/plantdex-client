import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Context from '../../Context'
import WateringAlert from './WateringAlert'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <WateringAlert plants={[]}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});