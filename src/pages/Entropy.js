import React from 'react';
import Menu from '../components/menu/Menu';
import '../styles/collection.css';

const photos = [
    '500',
    '501',
    '502',
    '503',
    '504',
    '505',
    '506',
    '507',
    '508',
    '509',
    '510',
    '511',
    '512',
    '513',
    '514',
    '515',
    '516',
    '517',
    '518',
    '519',
    '520',
    '521',
    '522',
    '523',
    '524',
    '525',
    '526',
    '527',
    '528',
    '529',
    '530'
];



export default class Entropy extends React.Component{
    render() {
        const listOfPhotos = photos.map((item, index) => {
            const requiredPic = require(`../pics/${item}.jpg`);
            console.log(requiredPic);
            return <li id={index} className="new-photo"
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
            <span className="copyRight">&copy;2019 eleen halvorsen</span>
        </div>;
    }
}
