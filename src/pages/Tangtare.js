import React from 'react';
import Menu from '../components/menu/Menu';
import '../styles/tangtare.css';
import '../styles/bio.css';

const photos = [
    '624',    
    '600',
    '601',
    '602',
    '603',
    '604',
    '605',
    '606',
    '607',
    '608',
    '609',
    '610',
    '611',
    '612',
    '613',
    '614',
    '615',
    '616',
    '617',
    '618',
    '619',
    '620',
    '621',
    '622',
    '623'
];



export default class Tangtare extends React.Component{
    render() {
        const listOfPhotos = photos.map((item, index) => {
            const requiredPic = require(`../pics/${item}.jpg`);
            console.log(requiredPic);
            return <li id={index} className="new-image"
                key={item.toString()}
                style={{backgroundImage: "url(" + requiredPic + ")"}}>
            </li>;
        });

        console.log(listOfPhotos);


        return <div className="image-content">
                <Menu />
                <main className="main_image-content">
                    <div className="image-container">
                        {listOfPhotos}
                    </div>
                    <div className="bio_text-container">
                            <p className="bio-text">
                            <span class="description-title">[TANG / TARE - norwegian for fucales and laminariales, 
                            orders of brown algae largely restricted to cold or polar seas.]  
                            </span>
                            </p>
                            <p className="bio-text">
                            <span className="font-weight">TANG / TARE</span> - is a collection of garments inspired by the dark mysterious colors, 
                            textures and beautiful fleeting nature of the underwater plant life, as well as 
                            the deep sea diving culture of Halvorsen´s parents and their friends in Norway 
                            in the 1980s. With a concept deep and dark, both literally and symbolically - 
                            mixed into the characteristic, avante garde world of Eleen Halvorsen - 
                            this is a collection in which fetisj meets 80s scuba diving & otherworldly poetry.
                            </p>
                        </div>  
                </main>
            <span className="copyRight">&copy;2019 eleen halvorsen</span>
        </div>;
    }
}
