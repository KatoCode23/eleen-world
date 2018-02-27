import React from 'react';
import Menu from '../components/menu/Menu';

export default class Home extends React.Component {
    render() {
        const background1=require('../pics/background7.jpg');
        const background2=require('../pics/background11.jpg');
        const background3=require('../pics/background12.jpg');
        const logo=require('../pics/logo.jpg');
        return  <div className="home-content">
            <Menu />
            <div className="home-collection"
                    style={{ backgroundImage: 'url(' + background1 + ')' }}>
                </div>
                <div className="home-collection"
                    style={{ backgroundImage: 'url(' + background2 + ')' }}>
                </div>
                <div className="home-collection"
                    style={{ backgroundImage: 'url(' + background3 + ')' }}>
                </div>
            <span className="copyRight">&copy;2018 eleen halvorsen</span>
        </div>;

    }
}
