import styled from 'styled-components';

export const StyledTestimony = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: row;
        height: 100vh;
        justify-content: center;
    }

    .testimony {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80%;
        height: 70vh;
        margin: 50px 0;
        box-shadow: 5px 5px 0px ${({ theme }) => theme.primaryYellow};
        @media (min-width: ${({ theme }) => theme.desktop}) {
            height: 80vh;
            width: 25%;
            margin: 0% 3%;
        }
        

        .quote {
            position: absolute;
            top: 10px;
            left: 10px;
        }

        p {
            font-family: FrankBold;
            font-size: 30px;
            color: ${({ theme }) => theme.secondaryGrey};
        }
        
        .client {
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
    }
    
`;