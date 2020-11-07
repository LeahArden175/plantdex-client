import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import LandingPage from './MainPages/LandingPage/LandingPage';
import Header from './components/Header/Header'
import AddPlant from './MainPages/AddPlant/AddPlant'
import PlantListPage from './MainPages/PlantListPage/PlantListPage'
import NewUserPage from './MainPages/NewUserPage/NewUserPage'
import PlantPage from './MainPages/PlantPage/PlantPage'
import UpdatePage from './MainPages/UpdatePage/UpdatePage';


function App() {
  return (
    <div className="app">
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/add-plant' component={AddPlant} />
      <Route exact path='/plant-list' component={PlantListPage} />
      <Route exact path='/sign-up' component={NewUserPage} />
      <Route exact path='/plant' component={PlantPage} />
      <Route exact path='/update' component={UpdatePage} />
    </div>
  );
}

export default App;
