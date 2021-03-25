import React, { Component } from "react";
import moment from "moment";
import PropTypes from 'prop-types';
import "./UpdateForm.css";
import history from "../../history";
import Context from "../../Context";
import config from "../../config";
import TokenService from "../../services/token-service";
import { Link } from "react-router-dom";
import ErrorBoundary from "../../ErrorBoundary";


export default class UpdateForm extends Component {
  static contextType = Context;
  state = {
    scientificname: "",
    nickname: "",
    purchaseplace: "",
    datepurchased: "",
    days_between_watering: "",
  };

  handleEditPlant = (event) => {
    event.preventDefault();
    const plant_id = this.props.plant;
    let updatedPlant = this.state;
    fetch(`${config.API_ENDPOINT}/api/plants/${plant_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        this.context.editPlant(data);
        history.push(`/plant/${data.id}`);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  componentDidUpdate = () => {
    if (this.context !== this.previousContext) {
      const id = this.props.plant;
      const { plantInfo = [] } = this.context;
      const findPlant = plantInfo && plantInfo.find((plant) => plant.id == id);
      this.setState({
        scientificname: findPlant.scientificname,
        nickname: findPlant.nickname,
        purchaseplace: findPlant.purchaseplace,
        datepurchased: moment.utc(findPlant.datepurchased).format("YYYY-MM-DD"),
        days_between_watering: findPlant.days_between_watering,
      });
    }
    this.previousContext = this.context;
  };

  componentDidMount = () => {
    this.previousContext = this.context;
    const id = this.props.plant;
    const { plantInfo = [] } = this.context;
    const findPlant = plantInfo && plantInfo.find((plant) => plant.id == id);
    if (findPlant) {
      this.setState({
        scientificname: findPlant.scientificname,
        nickname: findPlant.nickname,
        purchaseplace: findPlant.purchaseplace,
        datepurchased: moment.utc(findPlant.datepurchased).format("YYYY-MM-DD"),
        days_between_watering: findPlant.days_between_watering,
      });
    }
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

  wateringDaysChanged(days_between_watering) {
    this.setState({
      days_between_watering,
    });
  }

  render() {
    const id = this.props.plant;
    const { plantInfo = [] } = this.context;
    const findPlant = plantInfo && plantInfo.find((plant) => plant.id == id);

    if (!findPlant) {
      return "loading";
    }

    const formattedDatePurchased = moment.utc(this.state.datepurchased).format("YYYY-MM-DD")
      
    return (
      <div className="edit-plant-div">
        <ErrorBoundary>
          <form className="edit-form" onSubmit={this.handleEditPlant}>
            <h4 className="edit-plant-p">Nickname:</h4>
            <input
              className="edit-input"
              type="text"
              value={this.state.nickname}
              onChange={(e) => this.nickNameChanged(e.target.value)}
            />
            <p className="edit-plant-p">Adoption Date:</p>
            <input
              className="edit-input"
              type="date"
              value={formattedDatePurchased}
              onChange={(e) => this.datepurchasedChanged(e.target.value)}
            />
            <p className="edit-plant-p">Acquired from:</p>
            <input
              className="edit-input"
              type="text"
              value={this.state.purchaseplace}
              onChange={(e) => this.purchasePlaceChanged(e.target.value)}
            />
            <p className="edit-plant-p">Scientific Name:</p>
            <input
              className="edit-input"
              type="text"
              value={this.state.scientificname}
              onChange={(e) => this.scientificNameChanged(e.target.value)}
            />
            <p className="edit-plant-p">Days between watering:</p>
            <input
              className="edit-input"
              type="number"
              value={this.state.days_between_watering}
              onChange={(e) => this.wateringDaysChanged(e.target.value)}
            />
            <div className="edit-form-buttons">
              <button className="edit-buttons" type="submit">
                Submit
              </button>
              <button className="edit-buttons">
                <Link
                  className="edit-link-button"
                  to={`/plant/${this.props.plant}`}
                >
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

UpdateForm.propTypes = {
  plants: PropTypes.arrayOf(
    PropTypes.shape({
      scientificname: PropTypes.string,
      nickname: PropTypes.string,
      purchaseplace: PropTypes.string,
      datepurchased: PropTypes.instanceOf(Date),
      date_last_watered: PropTypes.instanceOf(Date),
      days_between_watering: PropTypes.instanceOf(Date),
    })
  )
}
