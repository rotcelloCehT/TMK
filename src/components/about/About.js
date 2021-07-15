// Header.js
import React from 'react';
import { StyledAbout } from './About.Styled';
import Face from '../../images/face.png';
import Check from '../../images/check.svg';
import Tools from '../../images/tools.svg';


const About = () => {
    return (
        <StyledAbout >
            <div className="about-container">
                <h1>About Us</h1>
                <div className="decor-bar"></div>
                <div className="image-cropper">
                    <img src={ Face } alt="Jason portrait" />
                </div> 
                <p>We've been in the<br/>carpentry business for<br/>more than 10 years<br/>with over 100 projects<br/>completed</p>
                <img className="tools" src={ Tools } alt="" />
            </div>
            <div className="checkmark-container">
                <div className="checkmark"> 
                    <img src={ Check } alt="" />
                    <p>On time</p>
                </div>
                <div className="checkmark"> 
                    <img src={ Check } alt="" />
                    <p>Well Crafted</p>
                </div><div className="checkmark"> 
                    <img src={ Check } alt="" />
                    <p>Personal Touch</p>
                </div>
            </div>
        </StyledAbout >
    )
};

export default About;