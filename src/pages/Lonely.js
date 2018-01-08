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
    constructor(props){
    super(props);
    this.state = {
      currentPic: null
    }
    this.testClick = this.testClick.bind(this);
    }

    testClick(event){
        this.setState({
            currentPic: event.target.id
        })
        console.log(event.target.id);
    }

    render() {
        const listOfPhotos = photos.map((item, index) => {
            const requiredPic = require(`../pics/${item}.jpg`);
            if(index === 8 || index === 15){
                return <li id={index} className="photo-wide"
                            key={item.toString()}
                            style={{backgroundImage: "url(" + requiredPic + ")"}}>
                        </li>
            }
            else{
                        return <li id={index} className="photo"
                        key={item.toString()}
                        onClick={this.testClick}
                        style={{backgroundImage: "url(" + requiredPic + ")"}}>
                    </li>
            }

        });


        return <div className="collection-content">
            <div className="photo-container">
                {listOfPhotos}
            </div>
        </div>
    }
}
