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
import TokenService from "./services/token-service";

class App extends Component {

  state={
    plantInfo: [],
    search: '',
    filterVal: ''
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/api/plants`,{
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    }) 
    .then(res => {
      if(!res.ok){
        throw new Error(res.status)
      }
      return res.json()
    })
    .then(this.setPlantInfo)
    .catch(error => this.setState({ error }))
  }

  setPlantInfo = plantInfo => {
    this.setState({ plantInfo })
    console.log('state', this.state)
  }

  handleDeletePlant = (plantId) => {
    this.setState({
      plantInfo: this.state.plantInfo.filter((plant)=> plant.id != plantId)
    })
  }

  handleAddPlant = (plant) => {
    console.log(plant)
    this.setState({
      plantInfo: [...this.state.plantInfo, plant]
    })
  }

  handleEditPlant = (plant) =>{
    this.setState({
      plantInfo: [...this.state.plantInfo, plant]
    })
  }

  handleSort = (plantInfo) => {
    this.setState({
      plantInfo
    })
  }
  
  render() {
    const value = {
      plantInfo: this.state.plantInfo,
      deletePlant: this.handleDeletePlant,
      addPlant: this.handleAddPlant,
      setPlant: this.setPlantInfo,
      handleSort: this.handleSort,
      handleEdit: this.handleEditPlant 
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
        <Route exact path="/update/:id" component={UpdatePage} />
      </div>
      </Context.Provider>
    );
  }
}

export default App;
