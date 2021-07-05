import styled from 'styled-components';
import kitchenMobile from '../../images/backgroundmobile.png'
import kitchenDesktop from '../../images/background.png'

export const StyledHeader = styled.div`
    background: white;
    background-image: url(${kitchenMobile});
    background-size: cover;
    background-position: center;
    height: 100vh;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        background-image: url(${kitchenDesktop});
    }

    img {
        width: 80%;
        padding-top: 100px;

        @media (min-width: ${({ theme }) => theme.desktop}) {
            padding-top: 130px;
            width: 30%;
        }
    }
}
    

    .logobackground {
        opacity: 70%;
        background-blend-mode: color-burn;
        position: absolute;
        z-index: 1;
    }
`;