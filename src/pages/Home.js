import React from 'react';
import Menu from '../components/menu/Menu';

export default class Home extends React.Component {
    render() {
        const background1=require('../pics/COVER4.jpg');
        const backgroundPhone=require('../pics/COVER3.jpg');
        const logo=require('../pics/logo.jpg');
        return  <div className="home-content">
            <Menu />
                <a href="/entropy">
                    <div className="home-collection"
                            style={{ backgroundImage: 'url(' + background1 + ')' }}>
                    </div>
                </a>
                <a href="/entropy">
                    <div className="home-collection-phone"
                            style={{ backgroundImage: 'url(' + backgroundPhone + ')' }}><a href="/entropy"></a>
                    </div>
                </a>
            <span className="copyRight">&copy;2018 eleen halvorsen</span>
        </div>;

    }
}
