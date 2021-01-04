import React from 'react';

import Menu from '../../components/categories-menu/menu.component';
import Navbar from '../../components/navbar/navbar.component';

const HomePage = () => (
    <div><Navbar activeTitle = "home"/>
        <div className = 'homepage'>
            <Menu/>
        </div>
    </div>
);

export default HomePage;