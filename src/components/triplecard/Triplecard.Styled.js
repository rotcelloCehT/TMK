import styled from 'styled-components';

export const StyledTriplecard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: row;
        height: 100vh;
    }

    #dark {
        background: ${({ theme }) => theme.primaryBlue};
        color: ${({ theme }) => theme.primaryGrey};
    }
    .card {
        display: flex;
        flex-direction: column;
        position: relative;
        height: 100vh;
        width: 100%;
        flex-grow: 1;
        padding: 20px;
        color: ${({ theme }) => theme.primaryBlue};
        background: ${({ theme }) => theme.primaryGrey};
        @media (min-width: ${({ theme }) => theme.desktop}) {;
            width: 33.33%;
            height: 100%;
        }

        .log-decor {
            position: absolute;
            top: 10px;
            right: 10px;
            width: 20%;
        }

        h3 {
            font-size: 10vw;
            font-family: OswaldMedium;
            margin:  10px 0;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                font-size: 3vw;
            }
        }
        
        .decor-bar {
            width: 25%;
            height: 5px;
            margin: 0;
            border-radius: 5px;
            background: ${({ theme }) => theme.primaryBlue};${({ theme }) => theme.primaryBlue}
        }

        p {
            font-size: 7vw;
            font-family: OswaldLight;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                font-size: 2vw;
            }
        }

        .ruler-decor {
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            z-index: 1;
              @media (min-width: ${({ theme }) => theme.desktop}) {
                background: white;
            }
        }
        #blue {
            background: ${({ theme }) => theme.primaryBlue};
            @media (min-width: ${({ theme }) => theme.desktop}) {
                background: ${({ theme }) => theme.primaryWhite};
            }
        }
        #grey {
            background: ${({ theme }) => theme.primaryGrey};
            @media (min-width: ${({ theme }) => theme.desktop}) {
                background: ${({ theme }) => theme.primaryWhite};
            }
        }
        
    }
    
`;