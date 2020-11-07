import React, { Component } from "react";
import "./AddPlantForm.css";
import { Link } from "react-router-dom";

export default class AddPlantForm extends Component {

  constructor(props){
    super(props)
    this.state ={
      name: '',
      nickName: '',
      purchasePlace: '',
      datePurchased: '',
      picture: ''
    }
  }

  handleAddNewPlant(event) {
    event.preventDefault()
    console.log('Submit new plant button worked')
    //fetch will go here to add new plant based off values in the form
    //TODO look up how to let users add pictures/Verify
    //TODO look up how to let users add dates/verify
  }



  nameChanged(name) {
    this.setState({
      name
    })
    console.log(this.state.name)
  }

  nickNameChanged(nickName) {
    this.setState({
      nickName
    })
  }

  purchasePlaceChanged(purchasePlace) {
    this.setState({
      purchasePlace
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
            name="scientificName"
            placeholder="ex: Pilea Peperomioides"
            value={this.state.name}
            onChange={e => this.nameChanged(e.target.value)}
          />
          <label className="input-labels" htmlFor="nicknamke">
            Nickname:
          </label>
          <input 
            className="input" 
            type="text" 
            placeholder="ex: UFO Plant"
            value={this.state.nickName}
            onChange={e => this.nickNameChanged(e.target.value)}
          />
          <label className="input-labels" htmlFor="location">
            Where is was bought:
          </label>
          <input
            className="input"
            type="text"
            placeholder="ex: Local Garden Center"
            value={this.state.purchasePlace}
            onChange={e => this.purchasePlaceChanged(e.target.value)}
          />
          <label className="input-labels" htmlFor="Date it was bought">
            Date it was bought:
          </label>
          <input className="input" type="date/" />
          <label className="input-labels" htmlFor="Picture">
            Upload Picture:
          </label>
          <input className="input" type="file" id="img" accept="image/*" />
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
