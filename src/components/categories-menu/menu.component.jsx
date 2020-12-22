import React from 'react';

import CategoryItem from '../category-item/category-item.component';

import './menu.styles.scss';

class Menu extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: 'Wedding',
                    imageUrl: 'https://i.ibb.co/JnT6VTz/olivia-bauso-30-UOq-DM5-QW0-unsplash.jpg',
                    size: 'large',
                    id: 1
                },
                {
                    title: 'Family',
                    imageUrl: 'https://i.ibb.co/gPPYLcW/jessica-rockowitz-jbi-In-QGY8og-unsplash.jpg',
                    size: 'large',
                    id: 2
                },
                {
                    title: 'Children',
                    imageUrl: 'https://i.ibb.co/rsTKrzV/edward-cisneros-XARK5o-TCESA-unsplash.jpg',
                    size: 'large',
                    id: 3
                },
                {
                    title: 'Newborn',
                    imageUrl: 'https://i.ibb.co/St028vq/shelby-miller-2f-QBmh-Ogld-M-unsplash.jpg',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Portrett',
                    imageUrl: 'https://i.ibb.co/prZHkxj/eleanor-4s-VM2k-Quk7-I-unsplash.jpg',
                    size: 'large',
                    id: 5
                },
                {
                    title: 'Studio',
                    imageUrl: 'https://i.ibb.co/d4YhGtH/photo-1600435576355-56da5964c39c.jpg',
                    size: 'large',
                    id: 6
                }

            ]
        }
    }

    render () {
        return (
            <div className = 'categories-menu'>
                {
                    this.state.sections.map(({title, imageUrl, size, id}) => (
                    <CategoryItem key = {id} title = {title} imageUrl = {imageUrl} size = {size}/>
                    ))
                }
            </div>  
        )
    };

}

export default Menu;