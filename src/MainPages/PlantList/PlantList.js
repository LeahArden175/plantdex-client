import React, { Component } from 'react'
import './PlantList.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import Plant from '../../components/Plant/Plant'

export default class PlantList extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <Plant />
            </div>
        )
    }
}