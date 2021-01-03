import React from 'react';

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import Section_Data from '../categories-menu/data';
import './category-page.styles.scss';

const CategoryPage = props => {
    return (
        <div className = "gallery">
            <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3,1200:4}}>
                <Masonry>
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