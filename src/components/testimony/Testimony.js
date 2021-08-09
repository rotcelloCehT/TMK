import React from 'react';
import { StyledTestimony } from './Testimony.Styled';
import Quote from '../../images/quote.svg';
import Client from '../../images/client.png';

const Testimony = () => {
    return (
        <StyledTestimony id="testimonials" >
            <div className="testimony">
                <img className="quote" src={ Quote } alt="quote" />
                <p>
                    "Tmk is easy to recommend.<br/>
                    The craftsmenship is remarkable<br/>
                    on everything they create."
                </p>
                <img className="client" src={ Client } alt="client profile" />
            </div>
            <div className="testimony">
            <img className="quote" src={ Quote } alt="quote" />
                <p>
                    "Tmk is easy to recommend.<br/>
                    The craftsmenship is remarkable<br/>
                    on everything they create."
                </p>
                <img className="client" src={ Client } alt="client profile" />
            </div>
            <div className="testimony">
            <img className="quote" src={ Quote } alt="quote" />
                <p>
                    "Tmk is easy to recommend.<br/>
                    The craftsmenship is remarkable<br/>
                    on everything they create."
                </p>
                <img className="client" src={ Client } alt="client profile" />
            </div>
        </StyledTestimony >
    )
};

export default Testimony;