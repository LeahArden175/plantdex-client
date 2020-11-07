import React, { Component } from 'react'
import './PlantList.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import Plant from '../../components/PlantList/PlantList'


const plantInfo = [
    {
      nickName: 'UFO Plant',
      scientificName: 'Pilea Peperomiodes',
      datePurchased: '2020-20-08',
      purchasePlace: 'Father Natures',
      picture: 'https://cdn11.bigcommerce.com/s-uemzj79jf9/images/stencil/2048x2048/products/1318/3781/Pilea_Peperomioides_pic1__73509.1591383605.jpg?c=2'
    },
    {
      nickName: 'Musaica',
      scientificName: 'Calathea Musaica',
      datePurchased: '2020-20-08',
      purchasePlace: 'Plant Vine',
      picture: 'https://i.etsystatic.com/21632802/r/il/c87480/2144459027/il_570xN.2144459027_fxxi.jpg'
    }
  ]

export default class PlantList extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <Plant plantInfo={plantInfo}/>
            </div>
        )
    }
}