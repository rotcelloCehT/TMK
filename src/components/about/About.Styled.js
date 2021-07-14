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
        background: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        @media (min-width: ${({ theme }) => theme.desktop}) {
            height: 100vh;
            width: 50%;
            justify-content: flex-start;
        }

        h1 {
            font-size: 50px;
            font-family: OpenLight;
            padding-top: 50px;
            margin: 0;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                font-size: 80px;
                padding-top: 30px;
            }
        }
        .decor-bar {
            width: 220px;
            height: 5px;
            border-radius: 5px;
            background: white;
            margin: 0px 0 30px 0;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                width: 340px;
            }
        }
        img {
            height: 220px;
            margin-bottom: 30px;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                height: 340px;
            }
        }
        
        p {
            font-size: 30px;
            font-family: OpenRegular;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                font-size: 40px;
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
        margin: 0 auto;
        background: ${({ theme }) => theme.primaryGrey};
        @media (min-width: ${({ theme }) => theme.desktop}) {
            height: 100vh;
            width: 50%;
            justify-content: center;
        }

        .checkmark {
            display: flex;
            align-items: center;
            text-align: left;
            justify-content: flex-start;
            margin: 20px 0;
            width: 60%;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                margin: 30px 0;
            }

            img {
                @media (min-width: ${({ theme }) => theme.desktop}) {
                    height: 150px;
                }
            }
            p {
                font-family: OswaldMedium;
                font-size: 35px;
                color: ${({ theme }) => theme.primaryDark};
                @media (min-width: ${({ theme }) => theme.desktop}) {
                    font-size: 60px;
                }
            }
        }
        
    }
`;