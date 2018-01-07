import React from 'react';

const photos = [
    "400",
    "401",
    "402",
    "403",
    "404",
    "405",
    "406",
    "407",
    "408",
    "409",
    "410",
    "411",
    "412",
    "413",
    "414",
    "415",
    "416",
    "417",
    "418",
    "419",
    "420",
    "421",
    "422",
    "423",
    "424",
    "425",
    "426",
    "427",
    "428",
    "429",
    "430",
    "431",
    "432"
];




export default class Lonely extends React.Component{
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
