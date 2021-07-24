import React from 'react';
import { StyledFooter } from './Footer.Styled';
import Insta from '../../images/insta.svg';
import Facebook from '../../images/facebook.svg';
import MyMap from './Map'

const Footer = () => {
    return (
        <StyledFooter >
            <div className="info">
                <p>Workshop: 15115 Hwy 27 Nobleton, ON</p>
                <p>Phone: 416 505 5812</p>
                <p>Email: Jason@tmkinc.ca</p>
            </div>
            <div className="social">
                <div className="insta">
                    <img src={ Insta }  alt="instagram link" />
                </div>
                <div className="facebook">
                    <img src={ Facebook } alt="facebook link" />
                </div>
            </div>
            <div className="map">
                <MyMap />
            </div>
        </StyledFooter >
    )
};

export default Footer;