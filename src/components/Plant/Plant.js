import React, { Component } from "react";
import "./Plant.css";

export default class Plant extends Component {
  render() {
    return (
      <div>
        <div class="list">
          <h3>Cactus from "Lowes"</h3>
          <button>See Plant Info!</button>
        </div>
        <div class="list">
          <h3>UFO Plant from "Urban Jungle"</h3>
          <button>See Plant Info!</button>
        </div>
        <div class="list">
          <h3>Pothos from "Father Natures"</h3>
          <button>See Plant Info!</button>
        </div>
      </div>
    );
  }
  s;
}
