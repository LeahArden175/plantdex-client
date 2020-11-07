import React, { Component } from "react";
import{ Link }from 'react-router-dom'
import "./PlantBlock.css";

export default class PlantBlock extends Component {
  render() {
    return (
      <li className='list'>
        <img className="image" alt="Plant" src={this.props.picture} />
        <Link 
            className='plant-link'
            to={`plant/${this.props.id}`}
        >
        <h2>{this.props.nickName}</h2>
        </Link>
        <p>{this.props.scientificName}</p>
        <p>{this.props.purchasePlace}</p>
        <p>{this.props.datePurchased}</p>
        <p>{this.props.id}</p>
        <button>Update</button>
      </li>
    );
  }
}
