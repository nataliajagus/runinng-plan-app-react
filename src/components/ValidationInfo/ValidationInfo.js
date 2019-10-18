import styled, { css } from 'styled-components';

const ValidationInfo = styled.p`
    text-align: center;
    margin-bottom: -30px;
    padding: 30px 0;

    ${({warning}) => (
        warning && css`
            color: red;
        `
    )}

    ${({success}) => (
        success && css`
            color: green;
        `
    )}

    `;

export default ValidationInfo;