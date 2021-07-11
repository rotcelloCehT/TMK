import styled from 'styled-components';
import "../../../node_modules/react-image-gallery/styles/css/image-gallery.css";

export const StyledGallery = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background: white;
    padding: 50px 0px;
    
    
    h1 {
        margin: 10px 0px;
        font-family: OpenExtraItalic;
        font-size: 55px;
        -webkit-text-stroke: 1px #FBAF00;
        -webkit-text-fill-color: white;
        
        @media (min-width: ${({ theme }) => theme.desktop}) {
            font-size: 75px;
            margin: 20px 0px
        }
    }
    .gallery-container {
        background: red;
    }
`;