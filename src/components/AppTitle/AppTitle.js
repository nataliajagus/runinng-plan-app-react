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

const StyledSubheading = styled.span`
    color: #fff;
    margin-top: -10px;
    margin-bottom: 50px;
    padding: 0 50px;
    text-align: center;
`;



const AppTitle = () => (
    <>
        <Logo />
        <StyledHeading>10 Weeks Jogging Plan App</StyledHeading>
        <StyledSubheading>choose your week and start the exercise!</StyledSubheading>
    </>
)

export default AppTitle;