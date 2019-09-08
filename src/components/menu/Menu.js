import React from 'react';
import './menu.css';

export default class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            phoneMenu: false,
            collections: false
        };
        this.openMenu = this.openMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
        this.collections = this.collections.bind(this);
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
            collections: false
        });
        console.log('You have clicked the closed menu button');
    }

    collections(){
        this.setState({
            collections: !this.state.collections
        });
        console.log('you have clicked, COLLECTIONS!!!');
    }

    render(){
        let phoneMenu = null;
        let collections = null;
        if(this.state.phoneMenu === true){
            phoneMenu = <div className="menu-container">
                <div className="close-menu" onClick={this.closeMenu}><i className="fas fa-times" aria-hidden="true"></i></div>
                <ul className="list">
                    <a href="http://shop.eleenhalvorsen.com/" target="_blank"><li className="category">SHOP</li></a>
                    <li className="category" onClick={this.collections}>COLLECTIONS</li>
                    <a href="/contact"><li className="category">CONTACT</li></a>
                    <a href="/bio"><li className="category">BIO</li></a>
                </ul>
            </div>;

        }else if(this.state.phoneMenu === false) {
            phoneMenu = null;
        }

        if(this.state.collections === true){
            collections = <div className="collection-menu">
                <ul className="collection-list">
                    <a href="/entropy"><li className="collection-name">ENTROPY</li></a>
                    <a href="/lonely"><li className="collection-name">LONELY LADY LOVERS</li></a>
                    <a href="/decomposed"><li className="collection-name">[DE]COMPOSED</li></a>
                    <a href="/blackmoon"><li className="collection-name">DANCING UNDER THE BLACK MOON</li></a>
                </ul>
            </div>;
        }else if(this.state.collections === false){
            collections = null;
        }
        return(
            <div className="menu-page">
                <div className="phone-menu" onClick={this.openMenu}>
                    <i className="fas fa-plus" aria-hidden="true"></i>
                </div>
                {phoneMenu}
                {collections}
            </div>
        );
    }
}
