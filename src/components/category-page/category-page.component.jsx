import React from 'react';

import {Link} from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

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
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3,1200:4}}>
                <Masonry gutter = {-1}>
                {
                    Section_Data.filter(f => f.linkUrl === props.match.params.title ).map(({id, ...otherSectionProps}) => (
                        otherSectionProps.images.map( ({...secProps}) => (
                            <img src = {secProps.imageUrl} alt = {secProps.alt} />
                        ))))}
                         
                    
                </Masonry>
            </ResponsiveMasonry>
        </div>
    );   
};

export default CategoryPage;