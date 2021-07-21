// Bespoke.js
import React from 'react';
import { StyledBespoke } from './Bespoke.Styled';

const Bespoke = () => {
    return (
        <StyledBespoke >
            <div className="quote-container"> 
                <p>"Everything we do <br/> 
                    has to be done extactly <br/>
                    to spec. The spec is <br/>
                    our bible and we <br/>
                    it to the letter."
                </p>
            </div>
            <div className="bespoke-container">
                <h1>Bespoke</h1>
                <p>a commission to exact <br/> specification impying <br/> exclusivity</p>
            </div>
        </StyledBespoke >
    )
};

export default Bespoke;