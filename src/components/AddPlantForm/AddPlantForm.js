import React, { Component } from "react";
import "./AddPlantForm.css";
import { Link } from "react-router-dom";
import history from "../../history";
import config from "../../config";
import Context from "../../Context";
import TokenService from "../../services/token-service";
import ErrorBoundary from "../../ErrorBoundary";
import PropTypes from "prop-types";

export default class AddPlantForm extends Component {
  static contextType = Context;

  state = {
    scientificname: "",
    nickname: "",
    purchaseplace: "",
    datepurchased: "",
    days_between_watering: "",
    date_last_watered: "",
  };

  handleAddNewPlant = (event) => {
    event.preventDefault();
    let newPlant = {
      scientificname: this.state.scientificname,
      nickname: this.state.nickname,
      purchaseplace: this.state.purchaseplace,
      datepurchased: this.state.datepurchased,
      date_last_watered: this.state.date_last_watered,
      days_between_watering: this.state.days_between_watering,
    };
    fetch(`${config.API_ENDPOINT}/api/plants`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newPlant),
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        this.context.addPlant(data);
        history.push(`/plant/${data.id}`);
      })
      .catch((err) => this.setState({ error: err.message }));
  };

  scientificNameChanged(scientificname) {
    this.setState({
      scientificname,
    });
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

  daysBetweenChanged(days_between_watering) {
    this.setState({
      days_between_watering,
    });
  }

  dateLastWateredChanged(date_last_watered) {
    this.setState({
      date_last_watered,
    });
  }

  render() {
    return (
      <div className="add-plant-form-div">
        <h3 className="add-plant-h3">Add a new Plant</h3>
        <ErrorBoundary>
          <form className="add-plant-form" onSubmit={this.handleAddNewPlant}>
            <label className="input-labels" htmlFor="plantType">
              Scientific Name:
            </label>
            <input
              className="input"
              required
              type="text"
              name="scientificname"
              placeholder="ex: Pilea Peperomioides"
              value={this.state.scientificname}
              onChange={(e) => this.scientificNameChanged(e.target.value)}
            />
            <label className="input-labels" htmlFor="nickname">
              Nickname:
            </label>
            <input
              className="input"
              required
              type="text"
              name="nickname"
              placeholder="ex: UFO Plant"
              value={this.state.nickname}
              onChange={(e) => this.nickNameChanged(e.target.value)}
            />
            <label className="input-labels" htmlFor="location">
              Where is was bought:
            </label>
            <input
              className="input"
              required
              type="text"
              name="purchaseplace"
              placeholder="ex: Local Garden Center"
              value={this.state.purchaseplace}
              onChange={(e) => this.purchasePlaceChanged(e.target.value)}
            />
            <label className="input-labels" htmlFor="Date it was bought">
              Date it was bought:
            </label>
            <input
              className="input"
              required
              type="date"
              name="datepurchased"
              value={this.state.datepurchased}
              onChange={(e) => this.datepurchasedChanged(e.target.value)}
            />
            <label className="input-labels" htmlFor="Last day it was watered">
              Last time it was watered:
            </label>
            <input
              className="input"
              required
              type="date"
              name="date_last_watered"
              value={this.state.date_last_watered}
              onChange={(e) => this.dateLastWateredChanged(e.target.value)}
            />
            <label
              className="input-labels"
              htmlFor="Amount of days between watering"
            >
              Amount of days between watering:
            </label>
            <input
              className="input"
              required
              type="number"
              name="days_between_watering"
              value={this.state.days_between_watering}
              onChange={(e) => this.daysBetweenChanged(e.target.value)}
            />
            <div className="add-plant-button-div">
              <button className="add-plant-submit-button" type="submit">
                Submit
              </button>
              <button className="add-plant-submit-button">
                <Link to="/plant-list" className="cancel-link">
                  Cancel
                </Link>
              </button>
            </div>
          </form>
        </ErrorBoundary>
      </div>
    );
  }
}

AddPlantForm.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      scientificname: PropTypes.string.isRequired,
      nickname: PropTypes.string.isRequired,
      purchaseplace: PropTypes.string.isRequired,
      datepurchased: PropTypes.instanceOf(Date).isRequired,
      date_last_watered: PropTypes.instanceOf(Date).isRequired,
      days_between_watering: PropTypes.instanceOf(Date).isRequired,
    })
  ),
};
