import React from 'react';
import './contactspage.styles.scss';

import Navbar from '../../components/navbar/navbar.component';

const ContactsPage = () => (
    <div>
        <Navbar activeTitle = "contacts" isGallery = {false}/>
    </div>
)

export default ContactsPage;