import styled from 'styled-components';

export const StyledCustom = styled.div`
    // color: secondaryBlue;

    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    margin-bottom: 20%;

    .custom-container {
        display: flex;
        align-items: center;
        margin: 100px 0 40px 0;
        width: 100%;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            width: 30%;
        }

        img {
            width: 40%;
        }
        h2 {
            font-size: 55px;
            color: ${({ theme }) => theme.primaryDark};
            width: 60%;
            margin: 0;
            padding-left: 5px;
        }
    }

    .cards-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            width: 70%;
        }

        .card {
            position: relative;
            margin: 1%;
            width : 48%;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                width: 23%;
            }

            img{
                width: 100%;
            }
            .title {
                display: flex;
                background: ${({ theme }) => theme.secondaryBlue};
                position: absolute;
                bottom: 0;
                width: 100%;
                justify-content: center;
            }
            h3 {
                margin: 0;
                font-size: 25px;
                font-family: OswaldMedium;
                padding: 1%;
                color: ${({ theme }) => theme.primaryWhite};
            }
        }
    }

`;