// globalStyles.js
import { createGlobalStyle } from 'styled-components';
import OpenRegular from '../fonts/Open_Sans/OpenSans-Regular.ttf';
import OpenLight from '../fonts/Open_Sans/OpenSans-Light.ttf';
import OswaldRegular from '../fonts/Oswald/Oswald-Regular.ttf'; 

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: OpenRegular;
    src: url(${OpenRegular}) format('truetype');
    font-display: auto;
  }
  @font-face {
    font-family: OpenLight;
    src: url(${OpenLight}) format('truetype');
    font-display: auto;
  }
  @font-face {
    font-family: OswaldRegular;
    src: url(${OswaldRegular}) format('truetype');
    font-display: auto;
  }
  

  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
    
  }
  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    width: 100%;
    text-rendering: optimizeLegibility;
  }
`;
 
export default GlobalStyle;