import React from 'react';

import './category-item.styles.scss';

const CategoryItem = ({title, imageUrl, size}) => (
    <div className = {`${size} category-item`}>
        <div  className = "background-image" style = {{
        backgroundImage: `url(${imageUrl})`
        }} />
        <div className = 'content'>
            <h1 className = 'title'>{title}</h1>
        </div>
    </div>
);

export default CategoryItem;