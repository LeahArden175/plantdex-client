import React from 'react'
import { Route } from 'react-router-dom'
import LandingPage from './MainPages/LandingPage/LandingPage';
import Header from './components/Header/Header'
import AddPlant from './MainPages/AddPlant/AddPlant'
import PlantList from './MainPages/PlantList/PlantList'

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/add-plant' component={AddPlant} />
      <Route exact path='/plant-list' component={PlantList} />
    </div>
  );
}

export default App;
