import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import NewUserPage from './NewUserPage';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<BrowserRouter><NewUserPage /></BrowserRouter>, div);

  ReactDOM.unmountComponentAtNode(div);
});