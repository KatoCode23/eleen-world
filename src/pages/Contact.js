import React from 'react';
import '../styles/contact.css';
import Menu from '../components/menu/Menu';

export default class Contact extends React.Component{
    render() {
        return (

            <div className="contact-content">
                <Menu />
                <div className="contact-container">
                    <div className="inquiry-holder">
                        <div className="inquiry"><h4>General Inquiries</h4></div>
                        <div className="email"><a href="mailTo:Atelier@eleenhalvorsen.com?Subject=Eleen%20Halvorsen%20Inquiry">ATELIER@eleenhalvorsen.com</a></div>
                    </div>
                    <div className="inquiry-holder">
                        <div className="inquiry"><h4>Sale Inquiries</h4></div>
                        <div className="email"><a href="mailTo:Sales@eleenhalvorsen.com?Subject=Eleen%20Halvorsen%20Wholesale%20Inquiry">SALES@eleenhalvorsen.com</a></div>
                    </div>
                    <div className="inquiry-holder">
                        <div className="inquiry"><h4>Showroom Appointments and Press Inquiries</h4></div>
                        <div className="email"><a href="mailTo:Press@eleenhalvorsen.com?Subject=Eleen%20Halvorsen%20Press%20Inquiry">PRESS@eleenhalvorsen.com</a></div>
                    </div>
                    <div className="inquiry-holder">
                        <div className="inquiry"><h4>Commissioned Work Available Upon Request</h4></div>
                        <div className="email"><a href="mailTo:Atelier@eleenhalvorsen.com?Subject=Eleen%20Halvorsen%20Commissioned%20Work%20Inquiry">ATELIER@eleenhalvorsen.com</a></div>
                    </div>
                </div>
                <span className="copyRight">&copy;2019 eleen halvorsen</span>
            </div>
        );

    }
}
