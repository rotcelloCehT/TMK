import styled from 'styled-components';

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: row;
    }

    
    .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: 120vh;
        width: 100%;
        position: relative;
        background: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        @media (min-width: ${({ theme }) => theme.desktop}) {
            height: 100vh;
            width: 40%;
            justify-content: flex-start;
        }

        .tools {
            mix-blend-mode: luminosity;
            position: absolute;
            bottom: -35vw;
            width: 70vw;
            z-index: 1;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                width: 20vw;
                bottom: calc(50% - 100px);
                right: -10vw;
            }
        }

        h1 {
            font-size: 50px;
            font-family: OpenLight;
            padding-top: 50px;
            margin: 0;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                font-size: 5vw;
                padding-top: 10px;
            }
        }
        .decor-bar {
            width: 220px;
            min-height: 5px;
            height: 5px;
            border-radius: 5px;
            background: white;
            margin: 0px 0 30px 0;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                width: 55%;
            }
        }
        img {
            width: 220px;
            margin-bottom: 30px;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                width: 15vw;
            }
        }
        
        p {
            font-size: 30px;
            font-family: OpenRegular;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                font-size: 2vw;
            }
        }
    }

    .checkmark-container {
        display: flex;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.primaryGrey};
        @media (min-width: ${({ theme }) => theme.desktop}) {
            height: 100vh;
            width: 60%;
        }

        .checkmark {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            padding-left: 10%;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                width: 80%;
            }

            img {
                height: 10vh;
                @media (min-width: ${({ theme }) => theme.desktop}) {
                    height: 12vh;
                }
            }
            p {
                font-family: OswaldMedium;
                font-size: 35px;
                color: ${({ theme }) => theme.primaryDark};
                @media (min-width: ${({ theme }) => theme.desktop}) {
                    font-size: 50px;
                }
            }
        }
        
    }
`;