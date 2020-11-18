import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import AddPlant from './AddPlant'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
  <BrowserRouter>
    <Route path="/add-plant" component={AddPlant}/>
  </BrowserRouter>, 
  div);

  ReactDOM.unmountComponentAtNode(div);
});