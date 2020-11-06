import React, { Component } from "react";
import "./AddPlantForm.css";
import { Link } from "react-router-dom";

export default class AddPlantForm extends Component {
  render() {
    return (
      <div className="add-plant-form-div">
        <h3>Add a new Plant</h3>
        <form className="add-plant-form">
          <label className="input-labels" for="plantType">
            Scientific Name:
          </label>
          <input
            className="input"
            type="text"
            placeholder="ex: Pilea Peperomioides"
          />
          <label className="input-labels" for="nicknamke">
            Nickname:
          </label>
          <input className="input" type="text" placeholder="ex: UFO Plant" />
          <label className="input-labels" for="location">
            Where is was bought:
          </label>
          <input
            className="input"
            type="text"
            placeholder="ex: Local Garden Center"
          />
          <label className="input-labels" for="Date it was bought">
            Date it was bought:
          </label>
          <input className="input" type="date/" />
          <label className="input-labels" for="Picture">
            Upload Picture:
          </label>
          <input className="input" type="file" id="img" accept="image/*" />
          <button className="submit-button" type="submit">
            Submit
          </button>
          <Link to="/plant-list">
            <button className="submit-button">Cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}
