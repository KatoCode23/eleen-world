import React from 'react';
import ReactDom from 'react-dom';
import './styles/main.css';
import Menu from './Menu';


class Home extends React.Component{
 constructor(props){
  super(props);
}

render(){
  const logo=require('./logo.jpg');
  return(
    <div className="main-content">
         <Menu />
       <div className="logo"
          style={{ backgroundImage: "url(" + logo + ")" }}>
       </div>
       <div className="phone-logo"
          style={{ backgroundImage: "url(" + logo + ")" }}>
      </div>
   </div>
  );
 }
}




ReactDom.render(
  <Home />,
  document.getElementById('root')
);
