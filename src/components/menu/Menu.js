import React from 'react';
import './menu.css'

export default class Menu extends React.Component {
constructor(props){
  super(props);
  this.state = {
    phoneMenu: false,
    collections: false
  }
  this.openMenu = this.openMenu.bind(this);
  this.closeMenu = this.closeMenu.bind(this);
  this.shop = this.shop.bind(this);
  this.collections = this.collections.bind(this);
  this.projects = this.projects.bind(this);
  this.bio = this.bio.bind(this);
  this.contact = this.contact.bind(this);
}

openMenu(event){
  event.preventDefault();
  this.setState({
    phoneMenu: !this.state.phoneMenu
  })
  console.log('Yo what up my menu! You clicked?' + this.state.phoneMenu);
}

closeMenu(event){
  event.preventDefault();
  this.setState({
    phoneMenu: false,
    collections: false
  })
  console.log('You have clicked the closed menu button');
}

shop(){
  this.setState({

  })
  console.log('you have clicked, SHOP!!!');
}

collections(){
  this.setState({
    collections: !this.state.collections
  })
  console.log('you have clicked, COLLECTIONS!!!');
}

projects(){
  this.setState({

  })
  console.log('you have clicked, PROJECTS!!!');
}

contact(){
  this.setState({

  })
  console.log('you have clicked, CONTACT!!!');
}

bio(){
  this.setState({

  })
  console.log('you have clicked, BIO!!!');
}

render(){
  let phoneMenu = null;
  let collections = null;
  if(this.state.phoneMenu === true){
    phoneMenu = <div className="menu-container">
                  <div className="close-menu" onClick={this.closeMenu}><i className="fa fa-times" aria-hidden="true"></i></div>
                   <ul className="list">
                      <li className="category" onClick={this.shop}>SHOP</li>
                      <li className="category" onClick={this.collections}>COLLECTIONS</li>
                      <li className="category" onClick={this.projects}>PROJECTS</li>
                      <li className="category" onClick={this.contact}>CONTACT</li>
                      <li className="category" onClick={this.bio}>BIO</li>
                    </ul>
                 </div>

  }else if(this.state.phoneMenu === false) {
    phoneMenu = null;
  }

  if(this.state.collections === true){
    collections = <div className="collection-menu">
                      <ul className="collection-list">
                          <li className="collection-name">TO BE NAMED</li>
                          <a href="/lonely"><li className="collection-name">LONELY LADY LOVERS</li></a>
                          <a href="/parts"><li className="collection-name">PARTS</li></a>
                          <a href="/decomposed"><li className="collection-name">[DE]COMPOSED</li></a>
                          <a href="/blackmoon"><li className="collection-name">DANCING UNDER THE BLACK MOON</li></a>
                      </ul>
                 </div>
  }else if(this.state.collections === false){
    collections = null;
  }
  return(
    <div className="menu-page">
        <div className="phone-menu" onClick={this.openMenu}>
            <i className="fa fa-plus" aria-hidden="true"></i>
        </div>
         {phoneMenu}
         {collections}
   </div>
  );
 }
}
