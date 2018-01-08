import React from 'react';


export default class Projects extends React.Component{
    render() {
        const requiredVideo = require("../videos/1.m4v");
        const requiredVideo2 = require("../videos/2.m4v");
        return (

        <div classNameName="video-content">
            <div classNameName="video-container">
                <video src={requiredVideo2} classNameName="video"
                    controls>
                </video>
                <div><a href="http://beautifulsavage.com/fashion/neuf-rever-anomalie" target="blank">Neuf Rever Anomalie</a></div>
                <div>Fashion Film For Beautiful Savage Magazine<br/>STYLING & COSTUME DESIGN</div>
                <div><a href="http://mutablefilms.com/" target="blank">directed + cinematography + editing - ERIC SCHNEIDER</a></div>
                <div><a href="http://www.seijiuehara.com/" target="blank">creative direction + hair - SEIJI UEHARA</a></div>
                <div><a href="http://www.sarahfiorello.com/" target="blank">makeup - SARAH FIORELLO</a></div>
                <div><a href="http://www.apmmodels.com/" target="blank">models - SASHA T. and NASTYA S. @ APM MODELS</a></div>
                <div>assistant camera - CHRIS CRUZ</div>
                <div>production assistant - TORI MCGRAW</div>
                <div>assistant editor - TORI MCGRAW</div>
                <div>post consultant - MITZI LY</div>
                <div>special thanks - TY PIKE</div>
                <video src={requiredVideo} classNameName="video"
                    controls>
                </video>
                <div><a href="https://vimeo.com/178509864" target="blank">Stvsh-MyTime</a></div>
                <div>CREATIVE DIRECTION & COSTUME DESIGN</div>
                <div><a href="https://soundcloud.com/stvsh718" target="blank">artist - STVSH</a></div>
                <div><a href="http://lukaschmiel.com/" target="blank">director + videographer - LUKAS CHMIEL</a></div>
                <div><a href="http://kiatavernier.com/" target="blank">choreographer + dancer - KIA TAVERNIER</a></div>
                <div><a href="http://maakhaus.com/" target="blank">producer - MAAK HAUS</a></div>
                <div><a href="http://www.bagsmith.com/" target="blank">yarn provided by - THE BAGSMITH YARN</a></div>
            </div>
        </div>
        );

    }
}
