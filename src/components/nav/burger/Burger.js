// Burger.js
import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import useWindowDimensions from '../../../hooks';

// props are destructured
const Burger = ({ open, setOpen }) => {
  const { width } = useWindowDimensions();
  if ( width < 576) {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    )
  }
  else {
    return (
      null
    )
  }
}
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;