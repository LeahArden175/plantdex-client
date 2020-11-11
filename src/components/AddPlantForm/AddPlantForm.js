import React, { Component } from "react";
import "./AddPlantForm.css";
import { Link } from "react-router-dom";
import config from '../../config'
import Context from "../../Context";
import TokenService from "../../services/token-service";

export default class AddPlantForm extends Component {
static contextType = Context

  state ={
      scientificname: '',
      nickname: '',
      purchaseplace: '',
      datepurchased: '',
      // picture: ''
    }



  handleAddNewPlant = (event) => {
    event.preventDefault()
    console.log(this.state)
    console.log('Submit new plant button worked')
    let newPlant = {
      scientificname: this.state.scientificname,
      nickname: this.state.nickname,
      purchaseplace: this.state.purchaseplace,
      datepurchased: this.state.datepurchased
    }
    fetch(`${config.API_ENDPOINT}/api/plants`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `basic ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newPlant)
    })
    .then((response) => {
      if(!response.ok) {
        throw Error(response.statusText)
      }
      return response.json()
    })
    .then((data) =>{
      this.context.addPlant(data);
      this.props.history.push(`/plant/${data.id}`)
    })
    .catch(err => this.setState({error: err.message}))
  }



  nameChanged(scientificname) {
    this.setState({
      scientificname
    })
    console.log(this.state.scientificname)
  }

  nickNameChanged(nickname) {
    this.setState({
      nickname
    })
  }

  purchasePlaceChanged(purchaseplace) {
    this.setState({
      purchaseplace
    })
  }

  datepurchasedChanged(datepurchased){
    this.setState({
      datepurchased
    })
  }


  render() {
    return (
      <div className="add-plant-form-div">
        <h3>Add a new Plant</h3>
        <form 
          className="add-plant-form"
          onSubmit={this.handleAddNewPlant}
        >
          <label className="input-labels" htmlFor="plantType">
            Scientific Name:
          </label>
          <input
            className="input"
            type="text"
            name="scientificname"
            placeholder="ex: Pilea Peperomioides"
            value={this.state.scientificname}
            onChange={e => this.nameChanged(e.target.value)}
          />
          <label className="input-labels" htmlFor="nickname">
            Nickname:
          </label>
          <input 
            className="input" 
            type="text" 
            placeholder="ex: UFO Plant"
            value={this.state.nickname}
            onChange={e => this.nickNameChanged(e.target.value)}
          />
          <label className="input-labels" htmlFor="location">
            Where is was bought:
          </label>
          <input
            className="input"
            type="text"
            placeholder="ex: Local Garden Center"
            value={this.state.purchaseplace}
            onChange={e => this.purchasePlaceChanged(e.target.value)}
          />
          <label className="input-labels" htmlFor="Date it was bought">
            Date it was bought:
          </label>
          <input 
            className="input" 
            type="date" 
            value={this.state.datepurchased}
            onChange={e => this.datepurchasedChanged(e.target.value)}
          />
          {/* <label className="input-labels" htmlFor="Picture">
            Upload Picture:
          </label>
          <input className="input" type="file" id="img" accept="image/*" /> */}
          <button className="submit-button" type="submit">
            Submit
          </button>
          <Link to="/plant-list">
            <button type="submit" className="submit-button">Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}
