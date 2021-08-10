import styled from 'styled-components';

export const StyledFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    background-color: ${({ theme }) => theme.primaryDark};
    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: row;
        height: 35vh;
        align-items: center;
        justify-content: center;
    }

    .info {
        color: white;
        padding: 10%;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            order: 1;
            padding: 0 0 0 2%;
        }
        p {
            font-family: OpenRegular;
            font-size: 20px;
            margin: 2%;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                font-size: 22px;
                margin: 1%;
            }
        }
        a {
            color: inherit;
            text-decoration: none;
        }
        
        a:hover {
            color:#00A0C6; 
            text-decoration:none; 
            cursor:pointer;  
        }
    }

    .social {
        display: flex;
        padding: 0 0 0 12%;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            flex-direction: column;
            justify-content: space-around;
            padding: 0 0 0 2%;
            height: 25vh;
        }
        div {
            margin: 0 10px 0 0;
        }
    }

    .map {
        height: 80vh;
        width: 100%;
        margin: 5% 0;
        position: relative;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            order: 2;
            height: 35vh;
            width: 50%;
        }
    }
    
`;