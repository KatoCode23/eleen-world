import React from 'react';


export default class Projects extends React.Component{
    render() {
        const requiredVideo = require("../videos/1.m4v");
        const requiredVideo2 = require("../videos/2.m4v");
        return (

        <div className="video-content">
            <div className="video-container">
                <video src={requiredVideo2} className="video"
                    controls>
                </video>
                <div><a href="http://beautifulsavage.com/fashion/neuf-rever-anomalie" target="blank"><p className="heading">Neuf Rever Anomalie</p></a></div>
                <div>Fashion Film For Beautiful Savage Magazine<br/>STYLING & COSTUME DESIGN</div>
                <div className="credit-holder"><a href="http://mutablefilms.com/" target="blank"><p className="credits">directed + cinematography + editing - <span className="name">ERIC SCHNEIDER</span></p></a></div>
                <div className="credit-holder"><a href="http://www.seijiuehara.com/" target="blank"><p className="credits">creative direction + hair - <span className="name">SEIJI UEHARA</span></p></a></div>
                <div className="credit-holder"><a href="http://www.sarahfiorello.com/" target="blank"><p className="credits">makeup - <span className="name">SARAH FIORELLO</span></p></a></div>
                <div className="credit-holder"><a href="http://www.apmmodels.com/" target="blank"><p className="credits">models - <span className="name">SASHA T. and NASTYA S. @ APM MODELS</span></p></a></div>
                <div className="credit-holder"><p className="credits">assistant camera - CHRIS CRUZ</p></div>
                <div className="credit-holder"><p className="credits">production assistant - TORI MCGRAW</p></div>
                <div className="credit-holder"><p className="credits">assistant editor - TORI MCGRAW</p></div>
                <div className="credit-holder"><p className="credits">post consultant - MITZI LY</p></div>
                <div className="credit-holder"><p className="credits">special thanks - TY PIKE</p></div>
                <video src={requiredVideo} className="video"
                    controls>
                </video>
                <div><a href="https://vimeo.com/178509864" target="blank"><p className="heading">Stvsh-My Time</p></a></div>
                <div>CREATIVE DIRECTION & COSTUME DESIGN</div>
                <div className="credit-holder"><a href="https://soundcloud.com/stvsh718" target="blank"><p className="credits">artist - <span className="name"> STVSH</span></p></a></div>
                <div className="credit-holder"><a href="http://lukaschmiel.com/" target="blank"><p className="credits">director + videographer - <span className="name">LUKAS CHMIEL</span></p></a></div>
                <div className="credit-holder"><a href="http://kiatavernier.com/" target="blank"><p className="credits">choreographer + dancer - <span className="name">KIA TAVERNIER</span></p></a></div>
                <div className="credit-holder"><a href="http://maakhaus.com/" target="blank"><p className="credits">producer - <span className="name">MAAK HAUS</span></p></a></div>
                <div className="credit-holder"><a href="http://www.bagsmith.com/" target="blank"><p className="credits">yarn provided by - <span className="name">THE BAGSMITH YARN</span></p></a></div>
            </div>
        </div>
        );

    }
}
