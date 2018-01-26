import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDom from 'react-dom';
import './styles/main.css';
import Home from './pages/Home';
import Lonely from './pages/Lonely';
import Parts from './pages/Parts';
import Decomposed from './pages/Decomposed';
import Blackmoon from './pages/Blackmoon';
import Projects from './pages/Projects';
import Bio from './pages/Bio';
import Contact from './pages/Contact';

class App extends React.Component {
    render() {
        return (<Router>
            <div className="main-content">
                <span className="home-button">
                    <a href="/">
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </a>
                </span>
                <header className="header">
                    <ul>
                        <li className="collection-button">Collection
                        <div className="collection-container">
                            <ul className="collection-container-ul">
                                <li className="link-button"><a href="/lonely">Lonely Lady Lovers</a></li>
                                <li className="link-button"><a href="/parts">Parts</a></li>
                                <li className="link-button"><a href="/decomposed">[De]composed</a></li>
                                <li className="link-button"><a href="/blackmoon">Dancing Under The Blackmoon</a></li>
                            </ul>
                        </div>
                        </li>
                        <li className="page-button"><a href="/projects">Projects</a></li>
                        <li className="page-button"><a href="/bio">Bio</a></li>
                        <li className="page-button"><a href="/contact">Contact</a></li>
                    </ul>
                </header>
                <Route exact path="/" component={Home} />
                <Route path="/projects" component={Projects} />
                <Route path="/bio" component={Bio} />
                <Route path="/contact" component={Contact} />
                <Route path="/lonely" component={Lonely} />
                <Route path="/parts" component={Parts} />
                <Route path="/decomposed" component={Decomposed} />
                <Route path="/blackmoon" component={Blackmoon} />
            </div>
        </Router>);
    }
}

ReactDom.render(
    <App />,
    document.getElementById('root')
);
