import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.Styled';
import tmkLogo from '../../../images/tmklogowhite.svg';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <img src={tmkLogo} alt="tmkLogo" />
      <a href="#quality">
        TMK Quality
      </a>
      <a href="#specialties">
        Specialties
        </a>
      <a href="#testimonials">
        Testimonials
      </a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;