// globalStyles.js
import { createGlobalStyle } from 'styled-components';
// OPEN SANS IMPORT 
import OpenRegular from '../fonts/Open_Sans/OpenSans-Regular.ttf';
import OpenLight from '../fonts/Open_Sans/OpenSans-Light.ttf';
import OpenExtraItalic from '../fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf'
// OSWALD IMPORT 
import OswaldMedium from '../fonts/Oswald/Oswald-Medium.ttf';
import OswaldRegular from '../fonts/Oswald/Oswald-Regular.ttf'; 
import OswaldLight from '../fonts/Oswald/Oswald-Light.ttf'; 

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
    font-family: OpenExtraItalic;
    src: url(${OpenExtraItalic}) format('truetype');
    font-display: auto;
  }

  @font-face {
    font-family: OswaldMedium;
    src: url(${OswaldMedium}) format('truetype');
    font-display: auto;
  }
  @font-face {
    font-family: OswaldRegular;
    src: url(${OswaldRegular}) format('truetype');
    font-display: auto;
  }
  @font-face {
    font-family: OswaldMedium;
    src: url(${OswaldMedium}) format('truetype');
    font-display: auto;
  }
  @font-face {
    font-family: OswaldLight;
    src: url(${OswaldLight}) format('truetype');
    font-display: auto;
  }
  

  html, body {
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.primaryWhite};
    color: ${({ theme }) => theme.primaryLight};
    text-rendering: optimizeLegibility;
    font-size: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
    
  }
`;
 
export default GlobalStyle;