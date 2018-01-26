import React from 'react';
import Menu from '../components/menu/Menu';
import '../styles/collection.css';

const photos = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '1',
    '11'
];



export default class Blackmoon extends React.Component{
    render() {
        const listOfPhotos = photos.map((item, index) => {
            const requiredPic = require(`../pics/${item}.jpg`);
            console.log(requiredPic);
            return <li id={index} className="photo"
                key={item.toString()}
                style={{backgroundImage: "url(" + requiredPic + ")"}}>
            </li>;
        });

        console.log(listOfPhotos);


        return <div className="collection-content">
            <Menu />
            <div className="photo-container">
                {listOfPhotos}
            </div>
        </div>;
    }
}
