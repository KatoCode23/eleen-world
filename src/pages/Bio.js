import React from 'react';
import '../styles/bio.css';
import Menu from '../components/menu/Menu';

export default class Bio extends React.Component{
    render() {
        const bio=require('../pics/bio-pic.jpg');
        return (

            <div className="bio-content">
                <Menu />
                <div className="bio-container">
                    <div className="bio">
                        <p className="bio-text">
                        <strong>ELEEN HALVORSEN </strong>
                        Born and raised in Norway moved to New York to attend Parsons
                        The New School for Design, from where she graduated in 2012. In April 2013 she 
                        launched her namesake label with the conceptual capsule collection 
                        Dancing Under The Black Moon.
                        </p>
                        <p className="bio-text">
                        Upon graduation ELEEN was among the selected graduates to show at Parsons'Benefit Exhibition
                        at The Chelsea Piers. ELEEN was also one of the finalists in the annual international 
                        Arts of Fashion Competition 2012, hosted by The Arts of Fashion Foundation in San Francisco. 
                        Since her launch Eleen Halvorsen has achieved editorial and written coverage from top 
                        publications including: Interview, Numero Tokyo, SCHON, StyleZeitgeist, 
                        Bullett Magazine Huffington Post and Refinery29, among others.
                        </p>
                        <p className="bio-text">
                        <strong>ELEEN HALVORSEN</strong> has a conceptual approach to design and by experimenting with unconventional 
                        patternmaking, construction and materials she is constantly seeking interesting new juxtapositions. 
                        The result of this constant search for contrast and novelty, together with her distinct aesthetic, 
                        is essential in positioning Eleen Halvorsen as a dark minimalistic, yet eccentric line.
                        </p>
                    </div>
                    <div className="bio-photo"
                        style={{ backgroundImage: 'url(' + bio + ')' }}>
                    </div>
                </div>
                <span className="copyRight">&copy;2019 eleen halvorsen</span>
            </div>
        );

    }
}
