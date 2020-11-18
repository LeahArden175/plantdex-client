import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import NotFoundPage from './NotFoundPage'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route component={NotFoundPage}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});