import React from 'react';
import { StyledFooter } from './Footer.Styled';
import Insta from '../../images/insta.svg';
import Facebook from '../../images/facebook.svg';
import MyMap from './Map'

const Footer = () => {
    return (
        <StyledFooter >
            <div className="info">
                <a target="__blank" href="https://goo.gl/maps/HXHshPHmRYKcohGL9">
                    <p>Workshop: 15115 Hwy 27 Nobleton, ON</p>
                </a>
                <p>Phone: 416 505 5812</p>
                <p>Email: Jason@tmkinc.ca</p>
            </div>
            <div className="social">
                <div className="insta">
                    <a target="__blank" href="https://www.instagram.com/tmkinc5/?igshid=1mra0jyqwphyn">
                        <img src={ Insta }  alt="instagram link" />
                    </a>
                </div>
                <div className="facebook">
                    <a target="__blank" href="https://www.facebook.com/tailormadekitchensinc/?modal=admin_todo_tour">
                        <img src={ Facebook } alt="facebook link" />
                    </a>
                </div>
            </div>
            <div className="map">
                <MyMap />
            </div>
        </StyledFooter >
    )
};

export default Footer;