import React, { Component } from "react";
import "./Filters.css";

export default class Filters extends Component {
  render() {
    return (
      <select id="plantSearch">
        <option>Nickname</option>
        <option>Store</option>
        <option>Scientific Name</option>
      </select>
    );
  }
}
