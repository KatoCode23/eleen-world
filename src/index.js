import React from 'react';
import ReactDom from 'react-dom';
import './styles/main.css';
import Home from './pages/Home';
import Lonely from './pages/Lonely';
import Parts from './pages/Parts';
import Decomposed from './pages/Decomposed';
import Blackmoon from './pages/Blackmoon';
import Projects from './pages/Projects';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

class App extends React.Component{
    render() {
        return (
            <Router>
                <div className="main-content">
                    <ul>
                        <li className="home-button"><a href="/"><i className="fa fa-home" aria-hidden="true"></i></a></li>
                        <li className="page-button"><a href="/lonely">Lonely</a></li>
                        <li className="page-button"><a href="/parts">Parts</a></li>
                        <li className="page-button"><a href="/decomposed">Decomposed</a></li>
                        <li className="page-button"><a href="/blackmoon">Blackmoon</a></li>
                        <li className="page-button"><a href="/projects">Projects</a></li>
                    </ul>
                    <Route exact path="/" component={Home} />
                    <Route path="/Projects" component={Projects} />
                    <Route path="/lonely" component={Lonely} />
                    <Route path="/parts" component={Parts} />
                    <Route path="/decomposed" component={Decomposed} />
                    <Route path="/blackmoon" component={Blackmoon} />
                </div>
            </Router>
        );
    }
}




ReactDom.render(
  <App />,
  document.getElementById('root')
);
