import React, { Component } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";

export default class SearchBar extends Component {
  handleSearch = (event) => {
    event.preventDefault();
    console.log("submit worked")
    const form = new FormData(event.currentTarget)
    const data = {
      search: form.get('search'),
      filterVal: form.get('filerValue')
    }
    //this.props.FETCH FUNTION GOES HERE
  };

  render() {
    return (
      <div className="search-form-div">
        <Link to="/add-plant">Add a new plant!</Link>
        <form className="search-form" onSubmit={this.handleSearch}>
          <label htmlFor="searchType">Search Here</label>
          <input 
            type="text"
            placeholder="search here!"
            name="search"
            id='search'
            required 
          />
          <label>Choose a search type:</label>
          <select 
            id="search"
            name='filterValue'
            defaultValue= ''
            //onChange=this.props.HANDLE FILTER CHANGE FUNTION
          >
            <option value="">No Filter</option>
            <option value="nickName">Nickname</option>
            <option value="purchasePlace">Store</option>
            <option value="scientificName">Scientific Name</option>
          </select>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
