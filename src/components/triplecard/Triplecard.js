// Header.js
import React from 'react';
import { StyledTriplecard } from './Triplecard.Styled';
import logLight from '../../images/loglight.svg';
import logDark from '../../images/logdark.svg';
import rulerLight from '../../images/rulerlight.svg';
import rulerDark from '../../images/rulerdark.svg';

const Triplecard = () => {
    return (
        <StyledTriplecard id="quality">
                <div className="card">
                    <img className="log-decor" src={ logDark } alt="log decoration" />
                    <h3>Quality Products</h3>
                    <div className="decor-bar"></div>
                    <p>Working with customers to bring their vision to reality. 
                        Every situation is unique, requiring slight modifications, 
                        adjustments or additions. We evaluate the space, 
                        listen to what the customer wants and provide a design. 
                        Our design is based on our previous experiences 
                        and what is most practical.
                    </p>
                    <img className="ruler-decor" id="blue" src={ rulerLight } alt="log decoration" />
                </div>
                <div className="card" id="dark">
                    <img className="log-decor" src={ logLight } alt="log decoration" />
                    <h3>Original Projects</h3>
                    <div className="decor-bar"></div>
                    <p>We can source the highest grade hardwoods, 
                        repurposed furniture, reclaimed wood. 
                        TMK Inc. can also provide cost effective 
                        laminates, Medium-Density Fiberboard (MDF) 
                        and melamine board. But regardless of the 
                        material we will maintain artisanal 
                        level craftsmanship.
                    </p>
                    <img className="ruler-decor" id="grey" src={ rulerDark } alt="log decoration" />
                </div>
                <div className="card">
                    <img className="log-decor" src={ logDark } alt="log decoration" />
                    <h3>Quality Products</h3>
                    <div className="decor-bar"></div>
                    <p>Tmk Inc. has supplied numerous Commercial,
                         Institutional and Industrial millwork according 
                         to design Specifications.
                    </p>
                    <img className="ruler-decor" src={ rulerLight } alt="log decoration" />
                </div>
        </StyledTriplecard>
    )
};

export default Triplecard;