import styled from 'styled-components';

export const StyledAbout = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: row;
        min-height: 50vh;
}

    .about-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        min-height: 120vh;
        width: 100%;
        background: ${({ theme }) => theme.primaryDark};
        @media (min-width: ${({ theme }) => theme.desktop}) {
            min-height: 100vh;
            justify-content: center;
        }

        h1 {
            font-size: 35px;
            font-family: OpenLight;
            padding-top: 50px;
            margin: 0;
        }
        .decor-bar {
            width: 170px;
            height: 3px;
            border-radius: 5px;
            background: white;
            margin: 2px 0 30px 0;
        }
        img {
            height: 200px;
            margin-bottom: 30px;
        }
        
        p {
            font-size: 30px;
            font-family: OpenRegular;
        }
    }

    .checkmark-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        min-height: 100vh;
        width: 100%;
        background: ${({ theme }) => theme.primaryGrey};

        @media (min-width: ${({ theme }) => theme.desktop}) {
            min-height: 100vh;
            justify-content: center;
        }

        .checkmark {
            display: flex;
            align-items: center;
            text-align: left;
            justify-content: flex-start;
            margin: 20px 0;
            width: 80%;

            p {
                font-family: OswaldMedium;
                font-size: 35px;
                color: ${({ theme }) => theme.primaryDark}
            }
        }
        
    }
`;