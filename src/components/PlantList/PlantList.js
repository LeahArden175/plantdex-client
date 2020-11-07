import React, { Component } from "react";
import "./PlantList.css";

export default class Plant extends Component {
  render() {

    

    return (
      <div>
        <div className="list">
          <h3>Cactus from "Lowes"</h3>
          <button>See Plant Info!</button>
        </div>
        <div className="list">
          <h3>UFO Plant from "Urban Jungle"</h3>
          <button>See Plant Info!</button>
        </div>
        <div className="list">
          <h3>Pothos from "Father Natures"</h3>
          <button>See Plant Info!</button>
        </div>
      </div>
    );
  }
}
