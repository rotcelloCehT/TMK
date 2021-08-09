// Header.js
import React from 'react';
import { StyledCustom } from './Custom.Styled';
import Hammer from '../../images/hammer.svg';
import Yard from '../../images/yard.png';
import Cabinetry from '../../images/cabinetry.png';
import CNC from '../../images/cnc.png';
import Commercial from '../../images/commercial.png';
import Furniture from '../../images/furniture.png';
import Institutional from '../../images/institutional.png';
import Pyrography from '../../images/pyrography.png';
import Residential from '../../images/residential.png';

const Custom = () => {
    return (
        <StyledCustom id="specialties">
                <div className="custom-container">
                    <img src={ Hammer } alt="hammer" />
                    <h2>Custom<br/>Made</h2>
                </div>
                <div className="cards-container">
                    <div className="card">
                        <img src={ Yard } alt="yard" />
                        <div className="title"><h3>Backyards</h3></div>
                    </div>
                    <div className="card">
                        <img src={ Cabinetry } alt="cabinetry" />
                        <div className="title"><h3>Cabinetry</h3></div>
                    </div>
                    <div className="card">
                        <img src={ CNC } alt="CNC" />
                        <div className="title"><h3>CNC</h3></div>
                    </div>
                    <div className="card">
                        <img src={ Commercial } alt="yard" />
                        <div className="title"><h3>Commercial</h3></div>
                    </div>
                    <div className="card">
                        <img src={ Furniture } alt="yard" />
                        <div className="title"><h3>Furniture</h3></div>
                    </div>
                    <div className="card">
                        <img src={ Institutional } alt="yard" />
                        <div className="title"><h3>Institutional</h3></div>
                    </div>
                    <div className="card">
                        <img src={ Pyrography } alt="yard" />
                        <div className="title"><h3>Pyrography</h3></div>
                    </div>
                    <div className="card">
                        <img src={ Residential } alt="yard" />
                        <div className="title"><h3>Residential</h3></div>
                    </div>
                </div>
        </StyledCustom >
    )
};

export default Custom;