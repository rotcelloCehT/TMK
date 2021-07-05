import styled from 'styled-components';


export const StyledMenu = styled.nav`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  background: #1C4C74;
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  
  @media (min-width: ${({ theme }) => theme.desktop}) {
    height: 80px;
    width: 100%;
    flex-direction: row;
    padding: 0;
    align-items: center;
    justify-content: flex-end;
    padding-right: 2%;
    transform: translateX(0);
    overflow: hidden;
    background: ${({ theme }) => theme.primaryDark};
  }

  img {
    position: absolute;
    left: 0;
    display: none;
    fill: #fff;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: inline;
      height: 60px;
      padding-left 15px;
    }
  }

  a {
    font-family: OpenRegular;
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
    text-align: center;
    transition: color 0.3s linear;

    @media (min-width: ${({ theme }) => theme.desktop}) {
      font-size: 1rem;
      text-align: center;
      padding: 0 2%;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }

  } 
`;
// The last '}' is for the a {.... 