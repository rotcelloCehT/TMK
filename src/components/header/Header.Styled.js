import styled from 'styled-components';
import kitchenMobile from '../../images/backgroundmobile.png'
import kitchenDesktop from '../../images/background.png'

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;
    background-image: url(${kitchenMobile});
    background-size: fill;
    background-position: center;
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

    h2 {
        font-size: 25px;
        font-family: OswaldRegular;
        color: ${({ theme }) => theme.primaryDark};
        @media (min-width: ${({ theme }) => theme.desktop}) {
            margin: 5px;
        }
    }
    
    h1 {
        font-size: 40px;
        font-family: OswaldRegular;
        color: ${({ theme }) => theme.primaryDark};
    }
}
    

    .logobackground {
        opacity: 70%;
        background-blend-mode: color-burn;
        position: absolute;
        z-index: 1;
    }
`;