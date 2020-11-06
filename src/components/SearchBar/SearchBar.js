import React, { Component } from "react";
import "./SearchBar.css";
import Filters from "../Filters/Filters";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="search-form-div">
        <button class="add-new-button">
            Add a new plant!
          </button>
        <form class="search-form">
          <label for="searchType">Search Here</label>
          <input type="text" />
          <label>Choose a search type:</label>
          <Filters />
          <button class="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
