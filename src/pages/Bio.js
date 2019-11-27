import React from 'react';
import '../styles/bio.css';
import Menu from '../components/menu/Menu';

export default class Bio extends React.Component{
    render() {
        const bio=require('../pics/EH-bio.jpg');
        return (

            <div className="bio-content">
                <Menu />
                <div className="bio_photo-container">
                    <div className="bio-photo"
                        style={{ backgroundImage: 'url(' + bio + ')' }}>
                    </div>
                </div>
                <div className="bio_text-container">     
                    <div className="bio">
                        <p className="bio-text">
                        <span className="font-weight">ELEEN HALVORSEN </span>
                         is a New York based Norwegian conceptual artist, 
                         designer and curator working across different mediums,
                         fusing garment making, leather work, objects and 
                         sculpture - wearable as well as pure “object of desire”. 
                         Her designs often deals with themes surrounding 
                         the abstracted body and textures, combining traditional 
                         garment construction with unconventional patternmaking, 
                         experimental fabric manipulations and unique silhouettes.    
                        </p>
                        <p className="bio-text">
                         Born and and raised in Norway, Eleen Halvorsen moved to 
                         New York to attend Parsons The New School for Design,
                         from where she graduated in 2012. In April 2013 she 
                         launched her first conceptual capsule collection 
                         - Dancing Under The Black Moon. Since the inception 
                         of her namesake brand, Eleen Halvorsen has been in 
                         charge of every step of construction from concept 
                         development through sketching, draping and patternmaking 
                         to constructing the final sample, creating a language truly her own. 
                        </p>
                        <p className="bio-text">
                         Since her launch Eleen Halvorsen has achieved editorial and 
                         written coverage from top publications including: Interview,
                         Numero Tokyo, SCHON, StyleZeitgeist, Bullett Magazine Huffington
                         Post and Refinery29, among others.
                        </p>
                    </div>
                </div>
                <span className="copyRight">&copy;2019 eleen halvorsen</span>
            </div>
        );

    }
}
