import React from 'react';
import Header from 'components/Header/Header';
import WeekButton from 'components/WeekButton/WeekButton';
import AppTitle from 'components/AppTitle/AppTitle';
import Wrapper from 'components/Wrapper/Wrapper';
import styled from 'styled-components';

const WeeksWrapper = styled.div`
    flex-flow: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: -50px;
    z-index: 2;
    display: flex;
`;

const Weeks = () => (
  <Wrapper>
      <Header>
       <AppTitle />
      </Header>
      <WeeksWrapper>
        <WeekButton />
        <WeekButton />
        <WeekButton />
        <WeekButton />
        <WeekButton />
        <WeekButton />
        <WeekButton />
        <WeekButton />
        <WeekButton />
        <WeekButton />
      </WeeksWrapper>     
  </Wrapper>
  
)


export default Weeks;