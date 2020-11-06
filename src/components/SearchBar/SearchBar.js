import React, { Component } from "react";
import "./SearchBar.css";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-form-div">
        <form class="search-form">
          <label for="searchType">Search Here</label>
          <input type="text" />
          <label>Choose a search type:</label>
          <select id="plantSearch">
            <option>Nickname</option>
            <option>Store</option>
            <option>Scientific Name</option>
          </select>
          <button class="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
  s;
}
