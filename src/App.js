import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LandingPage from "./MainPages/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import AddPlant from "./MainPages/AddPlant/AddPlant";
import PlantListPage from "./MainPages/PlantListPage/PlantListPage";
import NewUserPage from "./MainPages/NewUserPage/NewUserPage";
import PlantPage from "./MainPages/PlantPage/PlantPage";
import UpdatePage from "./MainPages/UpdatePage/UpdatePage";
import config from "./config";
import Context from "./Context";
import TokenService from "./services/token-service";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import NotFoundPage from './MainPages/NotFoundPage/NotFoundPage'

class App extends Component {
  state = {
    loggedIn: false,
    plantInfo: [],
    hasError: false
  };

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  fetchPlant = () => {
    fetch(`${config.API_ENDPOINT}/api/plants`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then(this.setPlantInfo)
      .catch((error) => this.setState({ error }));
  };

  setPlantInfo = (plantInfo) => {
    this.setState({ plantInfo });
  };

  handleDeletePlant = (plantId) => {
    this.setState({
      plantInfo: this.state.plantInfo.filter((plant) => plant.id != plantId),
    });
  };

  handleAddPlant = (plant) => {
    this.setState({
      plantInfo: [...this.state.plantInfo, plant],
    });
  };

  handleEditPlant = (plant) => {
    const newPlants = this.state.plantInfo.map((statePlant) => {
      if (statePlant.id === plant.id) {
        return plant;
      }
      return statePlant;
    });
    this.setState({
      plantInfo: newPlants,
    });
  };

  handleSort = (plantInfo) => {
    this.setState({
      plantInfo,
    });
  };

  handleLoggedIn = (loggedIn) => {
    this.setState({
      loggedIn
    })
  }

  render() {
    const value = {
      plantInfo: this.state.plantInfo,
      loggedIn: this.state.loggedIn,
      deletePlant: this.handleDeletePlant,
      addPlant: this.handleAddPlant,
      setPlant: this.setPlantInfo,
      handleSort: this.handleSort,
      editPlant: this.handleEditPlant,
      fetchPlant: this.fetchPlant,
      handleLoggedIn: this.handleLoggedIn
    };
    return (
      <Context.Provider value={value}>
        <div className="app">
          <Header />
          <main>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <PrivateRoute exact path="/add-plant" component={AddPlant} />
              <PrivateRoute exact path="/plant-list" component={PlantListPage} />
              <Route exact path="/sign-up" component={NewUserPage} />
              <PrivateRoute exact path="/plant/:id" component={PlantPage} />
              <PrivateRoute exact path="/update/:id" component={UpdatePage} />
              <Route
              component={NotFoundPage}
            />
            </Switch>
          </main>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
