import React from 'react';
import Menu from '../components/menu/Menu';
import '../styles/projects.css';


export default class Projects extends React.Component{
    render() {
        const requiredPhoto = require("../videos/1.jpg");
        const requiredPhoto1 = require("../videos/2.jpg");
        const requiredPhoto2 = require("../videos/3.jpg");
        const requiredPhoto3 = require("../videos/4.jpg");
        const requiredPhoto4 = require("../videos/5.jpg");
        const requiredPhoto5 = require("../videos/6.jpg");
        const requiredPhoto6 = require("../videos/7.jpg");
        const requiredPhoto7 = require("../videos/8.jpg");
        const requiredPhoto8 = require("../videos/9.jpg");
        const requiredVideo = require("../videos/1.m4v");
        const requiredVideo2 = require("../videos/2.m4v");
        return (

            <div className="video-content">
                <Menu />
                <div className="eleen-title">LA LLORANA</div>
                <div className="project-container" 
                        style={{backgroundImage: 'url(' + requiredPhoto + ')'}}>
                </div>
                <div className="project-container"
                    style={{backgroundImage: 'url(' + requiredPhoto1 + ')'}}>
                </div>
                <div className="project-container"
                    style={{backgroundImage: 'url(' + requiredPhoto2 + ')'}}>
                </div> 
                <div className="project-container"
                    style={{backgroundImage: 'url(' + requiredPhoto3 + ')'}}>
                </div>
                <div className="project-container"
                    style={{backgroundImage: 'url(' + requiredPhoto4 + ')'}}>
                </div>
                <div className="project-container"
                    style={{backgroundImage: 'url(' + requiredPhoto5 + ')'}}>
                </div>
                <div className="project-container"
                    style={{backgroundImage: 'url(' + requiredPhoto6 + ')'}}>
                </div>
                <div className="project-container"
                    style={{backgroundImage: 'url(' + requiredPhoto7 + ')'}}>
                </div>
                <div className="project-container"
                        style={{backgroundImage: 'url(' + requiredPhoto8 + ')'}}>
                </div>        
                    <div className="eleen-credit2">STYLING & COSTUME DESIGN</div>
                    <div>
                    <a href="http://www.maakhaus.com/" target="blank"><p className="heading2">LA LLORANA<br />Fashion Story for Maakhaus.com</p></a></div>
                    <div><p className="credits2">photography - <span className="noLink">BEATA KANTER</span></p></div>
                    <div><p className="credits2">makeup + hair - <span className="noLink">MARIKA AOKI</span></p></div>
                    <div><p className="credits2">model - <span className="noLink">BERKELEY DANYSH @ NEW YORK MODELS</span></p></div>
                
                <div className="video-container">
                    <video src={requiredVideo} className="video-1"
                        controls>
                    </video>
                    <div className="eleen-credit">CREATIVE DIRECTION & COSTUME DESIGN</div>
                    <div><a href="https://vimeo.com/178509864" target="blank"><p className="heading">Stvsh-My Time</p></a></div>
                    <div className="credit-holder"><a href="https://soundcloud.com/stvsh718" target="blank"><p className="credits">artist - <span className="name">STVSH</span></p></a></div>
                    <div className="credit-holder"><a href="http://lukaschmiel.com/" target="blank"><p className="credits">director + videographer - <span className="name">LUKAS CHMIEL</span></p></a></div>
                    <div className="credit-holder"><a href="http://kiatavernier.com/" target="blank"><p className="credits">choreographer + dancer - <span className="name">KIA TAVERNIER</span></p></a></div>
                    <div className="credit-holder"><a href="http://maakhaus.com/" target="blank"><p className="credits">producer - <span className="name">MAAK HAUS</span></p></a></div>
                    <div className="credit-holder"><a href="http://www.bagsmith.com/" target="blank"><p className="credits">yarn provided by - <span className="name">THE BAGSMITH YARN</span></p></a></div>
                    <video src={requiredVideo2} className="video"
                        controls>
                    </video>
                    <div className="eleen-credit">STYLING & COSTUME DESIGN</div>
                    <div><a href="http://beautifulsavage.com/fashion/neuf-rever-anomalie" target="blank">
                        <p className="heading">Neuf Rever Anomalie<br/>
                            <span className="header-credit">Fashion Film For Beautiful Savage Magazine</span></p></a></div>
                    <div className="credit-holder"><a href="http://mutablefilms.com/" target="blank"><p className="credits">directed + cinematography + editing - <span className="name">ERIC SCHNEIDER</span></p></a></div>
                    <div className="credit-holder"><a href="http://www.seijiuehara.com/" target="blank"><p className="credits">creative direction + hair - <span className="name">SEIJI UEHARA</span></p></a></div>
                    <div className="credit-holder"><a href="http://www.sarahfiorello.com/" target="blank"><p className="credits">makeup - <span className="name">SARAH FIORELLO</span></p></a></div>
                    <div className="credit-holder"><p className="credits">models - <span className="noLink">SASHA T. and NASTYA S. @ APM MODELS</span></p></div>
                    <div className="credit-holder"><p className="credits">assistant camera - <span className="noLink">CHRIS CRUZ</span></p></div>
                    <div className="credit-holder"><p className="credits">production assistant - <span className="noLink"> TORI MCGRAW</span></p></div>
                    <div className="credit-holder"><p className="credits">assistant editor - <span className="noLink"> TORI MCGRAW</span></p></div>
                    <div className="credit-holder"><p className="credits">post consultant - <span className="noLink"> MITZI LY</span></p></div>
                    <div className="credit-holder"><p className="credits">special thanks - <span className="noLink">TY PIKE</span></p></div>
                </div>
                <span className="copyRight">&copy;2018 eleen halvorsen</span>
            </div>
        );

    }
}
