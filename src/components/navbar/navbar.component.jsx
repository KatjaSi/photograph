import React, {Component} from 'react';

import Section_Data from  '../categories-menu/data';

import './navbar.styles.scss';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
            options: Section_Data.map((item) => ({title: item.title, linkUrl: item.linkUrl}) )
        }
    }

    handleClick =() => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return(
            <nav className = "navbar-items">
                <a className = "navbar-logo" href = "/"><i className = "fas fa-camera-retro fa-2x"></i></a>
                <div className = "menu-icon" onClick = {this.handleClick}>
                    <i className = {this.state.clicked ? 'fas fa-times':'fas fa-bars '}></i>
                </div>
                <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {
                    this.state.options.map(
                        (option, idx) => <li key = {idx}><a className = "gallery-option" href = {option.linkUrl}>{option.title}</a></li>
                    )
                }
                </ul>
            </nav>
        )
    }
}

export default Navbar;