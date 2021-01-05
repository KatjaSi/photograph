import React from 'react';
import './bookpage.styles.scss';

import Navbar from '../../components/navbar/navbar.component';

const BookPage = () => (
    <div>
        <Navbar activeTitle = "book" isGallery = {false}/>
    </div>
)

export default BookPage;