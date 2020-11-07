import React, { Component } from "react";
import "./SearchBar.css";
import Filters from "../Filters/Filters";
import { Link } from "react-router-dom";

export default class SearchBar extends Component {

  handleSearch = (event) => {
    event.preventDefault();
    console.log('submit worked')
  }

  render() {
    return (
      <div className="search-form-div">
        <Link 
         to='/add-plant'>
           Add a new plant!
         </Link>
        <form 
          className="search-form"
          onSubmit={this.handleSearch}
        >
          <label htmlFor="searchType">Search Here</label>
          <input type="text" />
          <label>Choose a search type:</label>
          <Filters />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
