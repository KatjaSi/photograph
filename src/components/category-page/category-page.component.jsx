import React from 'react';

import {Link} from 'react-router-dom';

import Section_Data from '../categories-menu/data';
import './category-page.styles.scss';

const CategoryPage = props => {
    console.log(props);
    return (
        <div>
            <div>
                <Link to = '/'>Home</Link>
                <h1>{Section_Data.filter(f => f.linkUrl === props.match.params.title )
                    .map( ({...secProps}) => secProps.title)
                    } gallery</h1>
            </div> 
            <div className = "gallery">
            {
                    Section_Data.filter(f => f.linkUrl === props.match.params.title ).map(({id, ...otherSectionProps}) => (
                        otherSectionProps.images.map( ({...secProps}) => (
                            <img src = {secProps.imageUrl} alt = {secProps.alt} />
                        ))))};
                         
                    
            </div>
        </div>
    );   
};

export default CategoryPage;