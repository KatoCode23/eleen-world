import React from 'react';
import Menu from '../components/menu/Menu';
import '../styles/collection.css';

const photos = [
    '200',
    '201',
    '202',
    '203',
    '204',
    '205',
    '206',
    '207',
    '208',
    '209',
    '210',
    '211',
    '212',
    '213',
    '214'
];

export default class Parts extends React.Component{
    render() {
        const listOfPhotos = photos.map((item, index) => {
            const requiredPic = require(`../pics/${item}.jpg`);
            console.log(requiredPic);
            return <li id={index} className='photo'
                key={item.toString()}
                style={{backgroundImage: 'url(' + requiredPic + ')'}}>
            </li>;
        });

        console.log(listOfPhotos);


        return <div className='collection-content'>
            <Menu />
            <div className='photo-container'>
                {listOfPhotos}
            </div>
        </div>;
    }
}
