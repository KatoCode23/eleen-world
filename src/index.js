import React from 'react';
import ReactDom from 'react-dom';
import './styles/main.css';
import Menu from './Menu';
import Blackmoon from './Blackmoon';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const Test = () => (
  <div>
      <h2>Syntax Check</h2>
  </div>
);

class Home extends React.Component{

render(){
  const logo=require('./logo.jpg');
  return(
  <Router>
    <div className="main-content">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blackmoon">Blackmoon</Link></li>
    </ul>
    <Route exact path="/" component={Test} />
    <Route path="/blackmoon" component={Blackmoon} />

      <Menu />
      <div className="logo"
       style={{ backgroundImage: "url(" + logo + ")" }}>
      </div>
      <div className="phone-logo"
       style={{ backgroundImage: "url(" + logo + ")" }}>
      </div>
    </div>
  </Router>
  );
 }
}




ReactDom.render(
  <Home />,
  document.getElementById('root')
);
