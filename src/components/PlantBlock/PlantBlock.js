import React, { Component } from "react";
import{ Link }from 'react-router-dom'
import "./PlantBlock.css";

export default class PlantBlock extends Component {

  render() {
    //console.log(this.props)
    
    return (
      <li className='list' key="this.props.id">
        {/* <img className="image" alt="Plant" src={this.props.picture} /> */}
        <Link 
            className='plant-link'
            to={`plant/${this.props.id}`
          }
        >
        <h2>{this.props.nickName}</h2>
        </Link>
      </li>
    );
  }
}
