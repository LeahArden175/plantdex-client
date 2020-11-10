import React, { Component } from "react";
import "./PlantItem.css";
import Context from "../../Context";

export default class PlantItem extends Component {

  static contextType = Context;

//   state ={
//       plantInfo: []
//   }

// //   setPlant = plantInfo => {
// //     this.setState({plantInfo})
// //     console.log('plant',plantInfo)
// //   }

// //   componentDidMount(){
// //     const { plantInfo=[] } = this.context;
// //       this.setPlant(plantInfo)
// //   }


  render() {
    const { plantInfo=[] } = this.context;
    const id = this.props.plant
    console.log("plantInfo is typeof:", typeof plantInfo);
    console.log("id:", id, "plantInfo:", plantInfo);
    const findPlant = plantInfo && plantInfo.find((plant) => plant.id == id);
    console.log("findPlant:", typeof findPlant);

    if(!findPlant){
        return 'loading'
    }

    return (
      <div>
        {/* <img className="image" alt="Plant" src={findPlant.picture} /> */}
        <p>{findPlant.nickname}</p>
        <p>{findPlant.datepurchased}</p>
        <p>{findPlant.purchaseplace}</p>
        <p>{findPlant.scientificname}</p>
      </div>
    );
  }
}
