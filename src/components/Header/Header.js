import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render () {
        return (
            <div className="header-div">
                <h1 className="header">Welcome to Plant-Dex</h1>
            </div>
        )
    }
}