import React, { Component } from "react";
import "./SearchBar.css";
import { Link } from "react-router-dom";
import config from '../../config';
import Context from '../../Context'

export default class SearchBar extends Component {

  state={
    plantInfo: []
  }

  static contextType = Context

  toggleSort = (event) => {
    event.preventDefault()
    console.log('button pressed')
    const plantInfo = this.context.plantInfo
    plantInfo.sort((a,b) => a.nickname.localeCompare(b.nickname));
    this.setState({plantInfo})
    console.log('after sort', plantInfo)
  }


  render() {
    console.log('before sort', this.context.plantInfo)
    return (
      <div className="search-form-div">
        <Link to="/add-plant">Add a new plant!</Link>
        <form className="search-form" onSubmit={this.handleSearch}>
          <p>Sort By</p>
          <button>All</button>
          <button onClick={this.toggleSort}>Alphabetically</button>
        </form>
      </div>
    );
  }
}
