import React, { Component } from "react";
import Header from "components/Header/Header";
import WeekButton from "components/WeekButton/WeekButton";
import AppTitle from "components/AppTitle/AppTitle";
import Wrapper from "components/Wrapper/Wrapper";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { settings } from "settings";
import Form from "components/Form/Form";
import Button from "components/Button/Button";

const WeeksWrapper = styled.div`
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -50px;
  z-index: 2;
  display: flex;
  max-width: 800px;
  margin-bottom: 50px;
`;

class Weeks extends Component {

  state = {
    runMinutes: 0,
    runSeconds: 0,
    walkMinutes: 0,
    walkSeconds: 0,
    rounds: 0
  }

  createExercise = (e) => {
    e.preventDefault();
    this.setState({ runMinutes: e.target[0].value, runSeconds: e.target[1].value, walkMinutes: e.target[2].value, walkSeconds: e.target[3].value, rounds: e.target[4].value });
    console.log(this.state);

    if(!e.target[4].value) {
        alert('add data!');  
    } 
    
}

componentDidUpdate() {
  console.log(this.state);
}

  render() {
    return (
      <Wrapper>
        <Header>
          <AppTitle />
        </Header>
        <WeeksWrapper>

        {settings.map((item) => (
          <Link to={{ pathname: '/exercise', state: { run: item.run, walk: item.walk, rounds: item.rounds, week: item.week } }} key={item.week}><WeekButton week={item.week} /></Link>
        ))}

        </WeeksWrapper>
        <h3>or create your own exercise:</h3>
        <Form submitFn={this.createExercise} state={this.state} />

        {this.state.rounds != 0 && (this.state.runMinutes + this.state.runSeconds + this.state.walkMinutes + this.state.walkSeconds) != 0 && ( <Link  to={{ pathname: '/exercise', state: { run: (this.state.runMinutes * 60 * 1000) + (this.state.runSeconds * 1000), walk: (this.state.walkMinutes * 60 * 1000) + (this.state.walkSeconds * 1000), rounds: this.state.rounds, week: 0 } }}><Button htmlType="submit" submit>Continue</Button></Link> )}
      </Wrapper>
    );
  }
}

export default Weeks;
