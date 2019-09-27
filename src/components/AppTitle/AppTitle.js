import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/jogging.svg';


const StyledHeading = styled.h2`
    color: #fff;
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 35px;
    margin-top: -20px;
    align-self: center;
    margin-top: 20px;
    text-align: center;
`;



const AppTitle = () => (
    <>
        <Logo />
        <StyledHeading>10 Weeks Jogging Plan App</StyledHeading>
    </>
)

export default AppTitle;