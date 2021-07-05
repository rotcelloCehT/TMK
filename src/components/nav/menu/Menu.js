import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.Styled';
import tmkLogo from '../../../images/tmklogowhite.svg';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <img src={tmkLogo} alt="tmkLogo" />
      <a href="/">
        Home
      </a>
      <a href="/">
        Pricing
        </a>
      <a href="/">
        Contact
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;