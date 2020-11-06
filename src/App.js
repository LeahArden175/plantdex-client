import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import LandingPage from './MainPages/LandingPage/LandingPage';
import Header from './components/Header/Header'
import AddPlant from './MainPages/AddPlant/AddPlant'
import PlantList from './MainPages/PlantList/PlantList'
import NewUserPage from './MainPages/NewUserPage/NewUserPage'
 

function App() {
  return (
    <div className="app">
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/add-plant' component={AddPlant} />
      <Route exact path='/plant-list' component={PlantList} />
      <Route exact path='/sign-up' component={NewUserPage} />
    </div>
  );
}

export default App;
