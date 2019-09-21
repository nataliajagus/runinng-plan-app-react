import styled, { css } from 'styled-components';

const Button = styled.button`
    border: 0;
    border-radius: 10px;
    padding: 20px 40px;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    color: #096db2; 
    background-color: #FFF;
    border: 1px solid #096db2; 
    margin: 10px;

    ${({secondary}) => (
        secondary && css`
            color: #FFF;
            background-color: #cdcdcd;
            border: 0;
        `
    )}

`;

export default Button;