import React, { Component } from "react";
import moment from 'moment'
import "./UpdateForm.css";
import Context from "../../Context";
import config from "../../config";
import TokenService from "../../services/token-service";

export default class UpdateForm extends Component {
  static contextType = Context;
  state = {
    scientificname: "",
    nickname: "",
    purchaseplace: "",
    datepurchased: "",
    // picture: ''
  };

  handleEditPlant = (event) => {
    event.preventDefault();
    console.log("edit clicked");
    const plant_id = this.props.plant
    let updatedPlant= this.state
    console.log(updatedPlant)
    fetch(`${config.API_ENDPOINT}/api/plants/${plant_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(updatedPlant)
    })
    .then((response) => {
      console.log(updatedPlant)
      if(!response.ok) {
        throw new Error(response.status)
      }
      console.log('made past error')
      return response.json()
    })
    .then(data => {
      console.log('data', data)
      console.log(this.props)
      console.log(this.context)
      this.context.editPlant(data)
      this.props.history.push(`/plant/${data.id}`)
    })
    .catch(error => {
      console.error({ error })
    })
  };

  componentDidUpdate = () => {
    // console.log(this.context)
    if(this.context !== this.previousContext){
      const id = this.props.plant;
      const { plantInfo = [] } = this.context;
      // console.log(this.context)
      const findPlant = plantInfo && plantInfo.find((plant) => plant.id == id);
      // console.log(findPlant)
      this.setState({
        scientificname: findPlant.scientificname,
        nickname: findPlant.nickname,
        purchaseplace: findPlant.purchaseplace,
        datepurchased: moment(findPlant.datepurchased).format('YYYY-MM-DD')
      })
    }
    this.previousContext = this.context
  }

  componentDidMount = () => {
    this.previousContext = this.context
    const id = this.props.plant;
      const { plantInfo = [] } = this.context;
      // console.log(this.context)
      const findPlant = plantInfo && plantInfo.find((plant) => plant.id == id);
      // console.log(findPlant)
      if(findPlant){
        this.setState({
          scientificname: findPlant.scientificname,
          nickname: findPlant.nickname,
          purchaseplace: findPlant.purchaseplace,
          datepurchased: moment(findPlant.datepurchased).format('YYYY-MM-DD')
      })
    }
  }


  scientificNameChanged(scientificname) {
    this.setState({
      scientificname
    });
    console.log(this.state.scientificname);
  }

  nickNameChanged(nickname) {
    this.setState({
      nickname,
    });
  }

  purchasePlaceChanged(purchaseplace) {
    this.setState({
      purchaseplace,
    });
  }

  datepurchasedChanged(datepurchased) {
    this.setState({
      datepurchased,
    });
  }

  render() {
    const id = this.props.plant;
    const { plantInfo = [] } = this.context;
    // console.log(this.context)
    const findPlant = plantInfo && plantInfo.find((plant) => plant.id == id);

    if (!findPlant) {
      return "loading";
    }
    return (
      <div>
          <form onSubmit={this.handleEditPlant}>
        <input
          type="text"
          value={this.state.nickname}
          onChange={e => this.nickNameChanged(e.target.value)}
        />
        <input
          type="date"
          value={this.state.datepurchased}
          onChange={e => this.datepurchasedChanged(e.target.value)}
        />
        <input
          type="text"
          value={this.state.purchaseplace}
          onChange={e => this.purchasePlaceChanged(e.target.value)}
          />
        <input
          type="text"
          value={this.state.scientificname}
          onChange={e => this.scientificNameChanged(e.target.value)}
        />
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
