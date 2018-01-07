import React from 'react';
import Menu from '../components/menu/Menu';

export default class Home extends React.Component {
    render() {
        const logo=require('../pics/logo.jpg');
        return  <div>
                    <Menu />
                    <div className="logo"
                        style={{ backgroundImage: "url(" + logo + ")" }}>
                    </div>
                    <div className="phone-logo"
                        style={{ backgroundImage: "url(" + logo + ")" }}>
                    </div>
                </div>

    }
}
