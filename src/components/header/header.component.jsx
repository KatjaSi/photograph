import React from 'react';

import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {NavLink, Link} from 'react-router-dom';

const Header = ({options}) => (
    <nav>
        <div className = "header">
            <Link className = 'logo-container' to = "/">
                <Logo className = 'logo' />
            </Link>
            <div className = 'options'>
                {
                    options.map (
                        (option) => <NavLink className = "option" to = {option.linkUrl}>{option.title}</NavLink>
                    )
                }
            </div>
        </div>
    </nav>
)

export default Header;