import React, {Component} from 'react';

import Section_Data from  '../categories-menu/data';

import './navbar.styles.scss';

class Navbar extends Component {
    constructor({activeTitle, isGallery}) {
        super();
        this.state = {
            active: activeTitle,
            isGallery: isGallery,
            clicked: false,
            options: Section_Data.map((item) => ({title: item.title, linkUrl: item.linkUrl}) ),
            activeGallery: false
        }
    }

    handleClick =() => {
        this.setState({clicked: !this.state.clicked})
    }

    handleGalleryClick = () => {
        this.setState({activeGallery: !this.state.activeGallery})
    }

    render() {
        console.log(this.state.active);
        return(
            <nav className = "navbar-items">
                <a className = "navbar-logo" href = "/">
                    <i className = {this.state.active === "home" ?"fas fa-camera-retro fa-2x active":"fas fa-camera-retro fa-2x "}></i></a>
                <div className = "menu-icon" onClick = {this.handleClick}>
                    <i className = {this.state.clicked ? 'fas fa-times':'fas fa-bars '}></i>
                </div>
                <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
                <div className = "dropdown">
                    <button 
                      className = {this.state.isGallery ? "dropbtn option active" : "dropbtn option"} 
                      onClick = {this.handleGalleryClick }>
                        Gallery&nbsp;
                        <i className={this.state.activeGallery ? "fa fa-minus fa-xs":"fa fa-plus fa-xs"}></i>
                    </button>
                    <div className = "dropdown-content" style = {this.state.activeGallery? {display: "block"}:{display:"none"}}>
                        {
                        this.state.options.map(
                        (option, idx) => <li key = {idx}  >
                            <a className = {this.state.active === option.linkUrl? 'option active':'option'}  href = {option.linkUrl}>{option.title}</a></li>
                        )
                     }
                    </div>
                </div>
                <li><a className = {this.state.active === "book" ? "option info active":"option info"} href = "book">Book</a></li>
                <li><a className = {this.state.active === "prices" ? "option info active":"option info"} href = "prices">Prices</a></li>
                <li><a className ={this.state.active === "omMeg" ? "option info active":"option info"} href = "omMeg">Om meg</a></li>
                <li><a className ={this.state.active === "contacts" ? "option info active":"option info"} href = "contacts">Contacts</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;