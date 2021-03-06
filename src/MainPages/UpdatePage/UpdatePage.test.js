import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import UpdatePage from './UpdatePage'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/:plant_Id" component={UpdatePage}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});