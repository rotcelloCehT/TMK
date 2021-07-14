import styled from 'styled-components';
import kitchenMobile from '../../images/backgroundmobile.png'
import kitchenDesktop from '../../images/background.png'

export const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100vh;
    width: 100%;
    background-image: url(${kitchenMobile});
    background-size: auto;
    background-repeat: no-repeat;
    background-position: center;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        background-image: url(${kitchenDesktop});
        background-size: cover;
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
        font-size: 35px;
        font-family: OswaldRegular;
        color: ${({ theme }) => theme.primaryDark};
        @media (min-width: ${({ theme }) => theme.desktop}) {
            margin: 5px;
        }
    }
    
    h1 {
        font-size: 45px;
        margin: 0;
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