import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Context from '../../Context'
import PrivateRoute from './PrivateRoute'

it.only('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <PrivateRoute/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});