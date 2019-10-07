import React, { Component } from "react";
import Header from "components/Header/Header";
import WeekButton from "components/WeekButton/WeekButton";
import AppTitle from "components/AppTitle/AppTitle";
import Wrapper from "components/Wrapper/Wrapper";
import styled from "styled-components";
import {Link} from "react-router-dom";

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
          <Link to={{ pathname: '/exercise/1000' }}><WeekButton week="1" /></Link>
          <Link to={{ pathname: '/exercise/2000' }}><WeekButton week="2" /></Link>
          <Link to={{ pathname: '/exercise/3000' }}><WeekButton week="3" /></Link>
          <Link to={{ pathname: '/exercise/4000' }}><WeekButton week="4" /></Link>
          <Link to={{ pathname: '/exercise/5000' }}><WeekButton week="5" /></Link>
          <Link to={{ pathname: '/exercise/6000' }}><WeekButton week="6" /></Link>
          <Link to={{ pathname: '/exercise/7000' }}><WeekButton week="7" /></Link>
          <Link to={{ pathname: '/exercise/8000' }}><WeekButton week="8" /></Link>
          <Link to={{ pathname: '/exercise/9000' }}><WeekButton week="9" /></Link>
          <Link to={{ pathname: '/exercise/10000' }}><WeekButton week="10" /></Link>
        </WeeksWrapper>
      </Wrapper>
    );
  }
}

export default Weeks;
