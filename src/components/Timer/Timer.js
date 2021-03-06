import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  padding: 50px;
  background: #fff;
  flex-shrink: 0;
  flex-direction: column;
  display: flex;
  max-width: 350px;
  align-self: center;
  border-radius: 18px;
  border: none;
  box-shadow: 1px 2px 8px 0px rgba(0, 0, 0, 0.18);
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

const Time = styled.span`
  color: #1f5aac;
  display: flex;
  font-size: 70px;
  justify-content: center;
  font-weight: 700;
  min-width: 300px;
`;

const Mode = styled.span`
  font-size: 50px;
  font-weight: 300;
  color: #1f5aac;
  text-align: center;
`;
 
const Timer = ({ hours, minutes, seconds, mode }) => {

  const ifHours = hours > 0 && hours + ':';

  return (
    <StyledContainer>
      <Time>
        {ifHours}{minutes}:{seconds}
      </Time>
      <Mode>{mode}</Mode>
    </StyledContainer>
  );
};

export default Timer;
