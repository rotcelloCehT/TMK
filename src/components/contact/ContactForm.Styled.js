import styled from 'styled-components';

export const StyledContactForm = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .form-header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: ${({ theme }) => theme.primaryYellow};
        height: 270px;
        position: relative;
        margin-bottom: 50px;
        @media (min-width: ${({ theme }) => theme.desktop}) {
                width: 80%;
            }

        img {
            height: 50%;
            margin-bottom: 5%;
        }
        p {
            padding: 0;
            margin: 0;
            position: absolute;
            bottom: 15px;
            font-size: 20px;
            font-family: OpenRegular;
            padding-bottom: 20px;
        }
        .ruler {
            position: absolute;
            width: 100.6%;
            height: unset;
            margin: -1px;
            bottom: 0;
            left: 0;
            z-index: 1;
            background: ${({ theme }) =>  theme.primaryWhite};
        }
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: ${({ theme }) =>  theme.primaryForm};
        border-radius: 10px;
        padding: 10px;
        margin: 0 5px;
        margin-bottom: 50px;
        @media (min-width: ${({ theme }) => theme.desktop}) {
            width: 80%;
            // padding: 1% 20%;
        }

        .form-field {
            display: flex;
            flex-direction: column;
            padding: 10px;
            align-items: center;
        }

        label {
            align-self: flex-start;
            padding-left: 5%;
            color: black;
            font-size: 20px;
            font-family: OpenBold;
            margin-bottom: 10px;
        }

        input {
            border: 2px solid ${({ theme }) =>  theme.primaryDark};
            border-radius: 3px;
            height: 40px;
            font-size: 20px;
            font-family: OpenBold;
            width: 90%;
            padding-left: 10px;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                padding-left: 20px;
            }
        }
        button {
            display: flex;
            align-items: center;
            background: ${({ theme }) =>  theme.tertiaryGrey};
            font-size: 30px;
            font-family: OpenLightItalic;
            padding: 5px 30px;

            p {
                color: ${({ theme }) =>  theme.primaryWhite};
                padding-right: 10px;
                margin: 0;
                letter-spacing: 3px;
            }
        }

        textarea {
            border: 2px solid ${({ theme }) =>  theme.primaryDark};
            border-radius: 3px;
            width: 90%;
            height: 200px;
            font-size: 20px;
            font-family: OpenBold;
            resize: none;
            margin-bottom: 20px;
            padding-left: 10px;
            @media (min-width: ${({ theme }) => theme.desktop}) {
                padding-left: 20px;
            }
        }
    }
`;