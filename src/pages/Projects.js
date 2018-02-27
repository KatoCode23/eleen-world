import React from 'react';
import Menu from '../components/menu/Menu';
import '../styles/projects.css';


export default class Projects extends React.Component{
    render() {
        const requiredVideo = require("../videos/1.m4v");
        const requiredVideo2 = require("../videos/2.m4v");
        return (

            <div className="video-content">
                <Menu />
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
