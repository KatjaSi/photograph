import React from 'react';

import CategoryItem from '../category-item/category-item.component';
import Section_Data from './data';

import './menu.styles.scss';

class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: Section_Data
      
        }
    }

    render () {
        return (
            <div className = 'categories-menu'>
                {
                    this.state.sections.map(({id, ...otherSectionProps}) => (
                        <CategoryItem key = {id} {...otherSectionProps} />
                    ))
                }
            </div>  
        )
    };

}

export default Menu;