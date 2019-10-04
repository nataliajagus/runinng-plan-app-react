import React from 'react';
import Timer from 'components/Timer/Timer';
import Header from 'components/Header/Header';
import Controls from 'components/Controls/Controls';
import Wrapper from 'components/Wrapper/Wrapper';
import styled from 'styled-components';

const WeekTitle = styled.h2`
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

const Subtitle = styled.p`
    color: #fff;
    text-align: center;
    font-weight: 100;
`;

function Exercise() {
  return (
    <div>
      <Wrapper>
      <Header>
      <WeekTitle>Week 1</WeekTitle>
      <Subtitle>Time left: 30:00</Subtitle>
      <Timer />
      </Header>
      <Controls />
      </Wrapper>
    </div>

  );
}

export default Exercise;