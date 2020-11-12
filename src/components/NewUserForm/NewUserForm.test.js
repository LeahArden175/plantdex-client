import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
// import Context from '../../Context'
import NewUserForm from './NewUserForm'

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><NewUserForm /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});