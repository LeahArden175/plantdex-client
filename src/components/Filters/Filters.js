import React, { Component } from "react";
import "./Filters.css";

export default class Filters extends Component {
  render() {
    return (
      <select id="plantSearch">
        <option value="">No Filter</option>
        <option value='nickName'>Nickname</option>
        <option value='purchasePlace'>Store</option>
        <option value="scientificName">Scientific Name</option>
      </select>
    );
  }
}
