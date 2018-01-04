import React from 'react';




export default class Menu extends React.Component {
constructor(props){
  super(props);
  this.state = {
    phoneMenu: false,
    collections: false
  }
  this.openMenu = this.openMenu.bind(this);
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

bio(){
  this.setState({

  })
  console.log('you have clicked, BIO!!!');
}

contact(){
  this.setState({

  })
  console.log('you have clicked, CONTACT!!!');
}

render(){
  let phoneMenu = null;
  let collections = null;
  if(this.state.phoneMenu === true){
    phoneMenu = <div className="menu-container">
                   <ul className="list">
                      <li className="category" onClick={this.shop}>shop</li>
                      <li className="category" onClick={this.collections}>collections</li>
                      <li className="category" onClick={this.projects}>projects</li>
                      <li className="category" onClick={this.bio}>bio</li>
                      <li className="category" onClick={this.contact}>contact</li>
                   </ul>
                 </div>

  }else if(this.state.phoneMenu === false) {
    phoneMenu = null;
  }
  if(this.state.collections === true){
    collections = <div className="collection-menu">
                      <ul className="collection-list">
                          <li className="collection-name">To Be Named</li>
                          <li className="collection-name">Parts</li>
                          <li className="collection-name">[De]Composerd</li>
                          <li className="collection-name">Dancing Under The Black Moon</li>
                      </ul>
                 </div>
  }else if(this.state.collections === false){
    collections = null;
  }

  return(
    <div className="menu-page">
         <div className="phone-button" onClick={this.openMenu}>
              <i className="fa fa-plus" aria-hidden="true"></i>
         </div>
         {phoneMenu}
         {collections}
   </div>
  );
 }
}