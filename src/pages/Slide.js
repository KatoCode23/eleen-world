import React from 'react';
import Menu from '../components/menu/Menu';
import '../styles/slide.css';

const images = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11'
];

export default class Slide extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentPic: 0
        };
        this.clickNext = this.clickNext.bind(this);
        this.clickPrevious = this.clickPrevious.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }
    
    clickNext(){
        this.setState({
            currentPic: this.state.currentPic + 1
        });
        console.log(this.state.currentPic);
    }
    
    clickPrevious(){
        this.setState({
            currentPic: this.state.currentPic -1
        });
    
    }

    onKeyPress(event) {
        if (event.code === 'ArrowRight') {
                    this.clickNext();
        } else if (event.code === 'ArrowLeft') {
                    this.clickPrevious();
        }
    }

    componentDidMount() {
        document.addEventListener("keyup", this.onKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keyup", this.onKeyPress, false);
    }
//Sina Hello...
    //As you can see at the bottoom the most basic input onKeyPress is working
    //What I want to do is click next in the slideshow once you press the right or left arrow
    //Of all the examples online I hae only been able to get this one working at all
    //Guidance please

    render () {
        const requiredPic = require(`../pics/${images[this.state.currentPic]}.jpg`);
        let nextbutton = null;
        if(this.state.currentPic < images.length -1){
            nextbutton = <span className='arrow next' onClick={this.clickNext}>
                <i className='fas fa-angle-right' aria-hidden='true'></i></span>;
        }

        let prevbutton = null;
        if(this.state.currentPic > 0){
            prevbutton = <span className='arrow prev' onClick={this.clickPrevious}>
                <i className='fas fa-angle-left' aria-hidden='true'></i></span>;
        }
        return (
            <div className='slide-content'>
                <Menu />
                <div className='image-container'
                    style={{ backgroundImage: 'url(' + requiredPic + ')' }}>
                </div>; 
                {nextbutton}
                {prevbutton}     
            </div>
        );
    }
}