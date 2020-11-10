import React, { Component } from "react";
import "./Filters.css";

export default class Filters extends Component {

  

  handleFilterChange = (event) => {
    const options = event.currentTarget.value

    this.setState({
      filterVal : options,
    }, () => {console.log('inside handleFilterChange', this.state.filterVal)})
  }

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
