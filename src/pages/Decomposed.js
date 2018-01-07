import React from 'react';

const photos = [
    "100",
    "101",
    "102",
    "103",
    "104",
    "105",
    "106",
    "107",
    "108",
    "109",
    "110",
    "111",
    "112",
    "113"
];




export default class Decomposed extends React.Component{
    render() {
        const listOfPhotos = photos.map((item, index) => {
            const requiredPic = require(`../pics/${item}.jpg`);
            console.log(requiredPic);
            return <li id={index} className="photo"
                        key={item.toString()}
                        style={{backgroundImage: "url(" + requiredPic + ")"}}>
                    </li>
        });

        console.log(listOfPhotos);


        return <div className="collection-content">
            <div className="photo-container">
                {listOfPhotos}
            </div>
        </div>
    }
}
