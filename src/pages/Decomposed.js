import React from 'react';
import Menu from '../components/menu/Menu';

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
            if(index === 6){
                return <li id={index} className="photo-wide"
                            key={item.toString()}
                            style={{backgroundImage: "url(" + requiredPic + ")"}}>
                        </li>
            }else{

            return <li id={index} className="photo"
                        key={item.toString()}
                        onClick={this.testClick}
                        style={{backgroundImage: "url(" + requiredPic + ")"}}>
                    </li>
            }
        });


        return <div className="collection-content">
        <Menu />
            <div className="photo-container">
                {listOfPhotos}
            </div>
        </div>
    }
}
