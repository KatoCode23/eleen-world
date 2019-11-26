import React from 'react';
import './menu.css';

export default class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phoneMenu: false,
            collections: false,
            bio: false
        };
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.collections = this.collections.bind(this);
        this.bio = this.bio.bind(this);
    }

    openMenu(event){
        event.preventDefault();
        this.setState({
            phoneMenu: !this.state.phoneMenu
        });
        console.log('Yo what up my menu! You clicked?' + this.state.phoneMenu);
    }

    closeMenu(event){
        event.preventDefault();
        this.setState({
            phoneMenu: false,
            collections: false,
            bio: false
        });
        console.log('You have clicked the closed menu button');
    }

    collections(){
        this.setState({
            collections: !this.state.collections
        });
        console.log('you have clicked, COLLECTIONS!!!');
    }

    bio(){
        this.setState({
            bio: !this.state.collections
        });
        console.log('you have clicked, ABOUT!!!');
    }

    render(){
        let phoneMenu = null;
        let collections = null;
        let bio = null;
        if(this.state.phoneMenu === true){
            phoneMenu = <div className="menu-container">
                <div className="close-menu" onClick={this.closeMenu}><i className="fas fa-times" aria-hidden="true"></i></div>
                <ul className="list">
                    <a href="http://shop-eleenhalvorsen.com/" target="_blank"><li className="category">SHOP</li></a>
                    <li className="category" onClick={this.collections}>COLLECTIONS</li>
                    <a href="/contact"><li className="category">CONTACT</li></a>
                    <li className="about" onClick={this.bio}>ABOUT</li>
                </ul>
            </div>;

        }else if(this.state.phoneMenu === false) {
            phoneMenu = null;
        }

        if(this.state.collections === true){
            collections = <div className="collection-menu">
                <ul className="collection-list">
                    <a href="/tangtare"><li className="collection-name">TANG/TARE</li></a>
                    <a href="/entropy"><li className="collection-name">ENTROPY</li></a>
                    <a href="/lonely"><li className="collection-name">LONELY LADY LOVERS</li></a>
                    <a href="/decomposed"><li className="collection-name">[DE]COMPOSED</li></a>
                    <a href="/blackmoon"><li className="collection-name">DANCING UNDER THE BLACK MOON</li></a>
                </ul>
            </div>;
        }else if(this.state.collections === false){
            collections = null;
        }
        if(this.state.bio === true){
            bio = <div className="about-menu">
                <ul className="about-list">
                    <a href="/bio"><li className="about-name">BIO</li></a>
                    <a href="/process"><li className="about-name">PROCESS</li></a>
                </ul>
            </div>;
        }else if(this.state.bio === false){
            this.about = null;
        }
        return(
            <div className="menu-page">
                <div className="phone-menu" onClick={this.openMenu}>
                    <i className="fas fa-plus" aria-hidden="true"></i>
                </div>
                {phoneMenu}
                {collections}
                {bio}
            </div>
        );
    }
}
