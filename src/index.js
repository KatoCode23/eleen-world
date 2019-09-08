import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/main.css';
import Home from './pages/Home';
import Lonely from './pages/Lonely';
import Decomposed from './pages/Decomposed';
import Blackmoon from './pages/Blackmoon';
import Entropy from './pages/Entropy';
import Tangtare from './pages/Tangtare';
import Bio from './pages/Bio';
import Contact from './pages/Contact';

class App extends React.Component {
    render() {
        const logo=require('./pics/logo.jpg');
        return (<Router>
            <div className="main-content">
                <a href="/">
                    <span className="home-button"
                        style={{ backgroundImage: 'url(' + logo + ')' }}>
                    </span>
                </a>
                <header className="header">
                    <a href="/">
                        <span className="desktop-home-button"
                            style={{ backgroundImage: 'url(' + logo + ')' }}>
                        </span>
                    </a>
                    <ul>
                        <li className="collection-button">COLLECTIONS
                        <div className="collection-container">
                            <ul className="collection-container-ul">
                                <li className="link-button"><a href="/tangtare">TANGTARE</a></li>
                                <li className="link-button"><a href="/entropy">ENTROPY</a></li>
                                <li className="link-button"><a href="/lonely">LONELY LADY LOVERS</a></li>
                                <li className="link-button"><a href="/decomposed">[DE]COMPOSED</a></li>
                                <li className="link-button"><a href="/blackmoon">DANCING UNDER THE BLACK MOON</a></li>
                            </ul>
                        </div>
                        </li>
                        <li className="page-button"><a href="http://shop.eleenhalvorsen.com/" target="_blank">SHOP</a></li>
                        <li className="page-button"><a href="/bio">BIO</a></li>
                        <li className="page-button"><a href="/contact">CONTACT</a></li>
                    </ul>
                </header>
                <Route exact path="/" component={Home} />
                <Route path="/bio" component={Bio} />
                <Route path="/contact" component={Contact} />
                <Route path="/lonely" component={Lonely} />
                <Route path="/decomposed" component={Decomposed} />
                <Route path="/blackmoon" component={Blackmoon} />
                <Route path="/entropy" component={Entropy} />
                <Route path="/tangtare" component={Tangtare} />
            </div>
        </Router>   
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
