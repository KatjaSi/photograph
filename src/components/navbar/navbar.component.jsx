import React, {Component} from 'react';

import Section_Data from  '../categories-menu/data';

import './navbar.styles.scss';

class Navbar extends Component {
    constructor({activeTitle}) {
        super();
        this.state = {
            active: activeTitle,
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
                <a className = "navbar-logo" href = "/">
                    <i className = {this.state.active === "home" ?"fas fa-camera-retro fa-2x active":"fas fa-camera-retro fa-2x "}></i></a>
                <div className = "menu-icon" onClick = {this.handleClick}>
                    <i className = {this.state.clicked ? 'fas fa-times':'fas fa-bars '}></i>
                </div>
                <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {
                    this.state.options.map(
                        (option, idx) => <li key = {idx}  >
                            <a className = {this.state.active === option.linkUrl? 'option active':'option '}  href = {option.linkUrl}>{option.title}</a></li>
                    )
                }
                <li><a className = {this.state.active === "book" ? "option info active":"option info"} href = "book">Book</a></li>
                <li><a className ={this.state.active === "omMeg" ? "option info active":"option info"} href = "omMeg">Om meg</a></li>
                <li><a className ={this.state.active === "contacts" ? "option info active":"option info"} href = "contacts">Contacts</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;