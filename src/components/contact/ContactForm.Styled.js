import styled from 'styled-components';

export const StyledContactForm = styled.form `
    border: 10px solid red;

    div {
        padding: 10px;
    }

    label {
        color: black;
        font-size: 24px;
        padding-right: 10px;
    }

    input {
        border: 2px solid ${({ theme }) =>  theme.primaryDark};
        border-radius: 3px;
    }

    textarea {
        border: 2px solid ${({ theme }) =>  theme.primaryDark};
        border-radius: 3px;
    }
`;