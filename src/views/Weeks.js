import React, { Component } from "react";
import Header from "components/Header/Header";
import WeekButton from "components/WeekButton/WeekButton";
import AppTitle from "components/AppTitle/AppTitle";
import Wrapper from "components/Wrapper/Wrapper";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { settings } from "settings";

const WeeksWrapper = styled.div`
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -50px;
  z-index: 2;
  display: flex;
  max-width: 800px;
`;

class Weeks extends Component {

  render() {
    return (
      <Wrapper>
        <Header>
          <AppTitle />
        </Header>
        <WeeksWrapper>

        {settings.map((item) => (
          <Link to={{ pathname: `/exercise/${item.seconds}` }}><WeekButton week={item.week} /></Link>
        ))}
        
        </WeeksWrapper>
      </Wrapper>
    );
  }
}

export default Weeks;
