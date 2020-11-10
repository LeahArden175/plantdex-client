import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./MainPages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import AddPlant from "./MainPages/AddPlant/AddPlant";
import PlantListPage from "./MainPages/PlantListPage/PlantListPage";
import NewUserPage from "./MainPages/NewUserPage/NewUserPage";
import PlantPage from "./MainPages/PlantPage/PlantPage";
import UpdatePage from "./MainPages/UpdatePage/UpdatePage";
import config from './config'
import Context from './Context'

class App extends Component {

  state={
    plantInfo: []
  }

  setPlantInfo = plantInfo => {
    this.setState({ plantInfo })
    console.log(this.state)
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/plants`)
      .then(res => {
        if(!res.ok){
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setPlantInfo)
      .catch(error => this.setState({ error }))
  }

  
  render() {
    const value = {
      plantInfo: this.state.plantInfo
    }
    return (
      <Context.Provider value={value} >
      <div className="app">
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/add-plant" component={AddPlant} />
        <Route exact path="/plant-list" component={PlantListPage} />
        <Route exact path="/sign-up" component={NewUserPage} />
        <Route exact path="/plant/:id" component={PlantPage} />
        <Route exact path="/update" component={UpdatePage} />
      </div>
      </Context.Provider>
    );
  }
}

export default App;
