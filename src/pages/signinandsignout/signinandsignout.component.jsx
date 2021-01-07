import React from 'react';
import './signinandsignout.styles.scss';

import Navbar from '../../components/navbar/navbar.component';

import SignIn from '../../components/sign-in/sign-in.component';

const SignInAndSignOutPage = () => (
    <div>
        <Navbar activeTitle = "signin" isGallery = {false}/>
        <div className = "sign-in-and-sign-out">
            <SignIn/>
        </div>
    </div>
);

export default SignInAndSignOutPage;