// Header.js
import React from 'react';
import { StyledHeader } from './Header.Styled'
import  tmkLogo  from '../../images/tmklogo.svg';


const Header = () => {
    return (
        <StyledHeader >
            <img src={ tmkLogo } alt="tmk logo" />
            <h2>Tailor Made Kitchens Inc.</h2>
            <h1>Custom cabinetry and woodwork</h1>
        </StyledHeader>
    )
};

export default Header;