import styled from 'styled-components';
import BespokeDesktop from '../../images/bespokeDesktop.jpg';
import Bespoke from '../../images/bespoke.jpg';

export const StyledBespoke = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-image: url(${Bespoke});
    background-size: cover;
    background-repeat: no-repeat;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        background-image: url(${BespokeDesktop});
    }

    .quote-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 90%;
        background: ${({ theme }) => theme.semiWhite};
        @media (min-width: ${({ theme }) => theme.desktop}) {
            width: 500px;
        }

            p { 
                text-align: center;
                font-size: 32px;
                font-family: FrankRegular;
                color: ${({ theme }) => theme.primaryWhite};
            }
    }

    .bespoke-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        height: 40%;
        width: 90%;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            width: 40%;
        }

        h1 {
            font-family: FrankBold;
            font-size: 75px;
            color: ${({ theme }) => theme.primaryWhite};
            margin: 0;
        }
        p {
            margin: 1%;
            font-size: 22px;
            font-family: OpenRegular;
            color: ${({ theme }) => theme.primaryWhite};
            @media (min-width: ${({ theme }) => theme.desktop}) {
                margin: 0;
            }
        }
    }
`;