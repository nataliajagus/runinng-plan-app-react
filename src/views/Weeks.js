import React, { Component } from "react";
import Header from "components/Header/Header";
import WeekButton from "components/WeekButton/WeekButton";
import AppTitle from "components/AppTitle/AppTitle";
import Wrapper from "components/Wrapper/Wrapper";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { settings } from "settings";
import Form from "components/Form/Form";
import Button from "components/Button/Button";
import ValidationInfo from "components/ValidationInfo/ValidationInfo";

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

const InfoWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
`;

class Weeks extends Component {
  state = {
    runMinutes: 0,
    runSeconds: 0,
    walkMinutes: 0,
    walkSeconds: 0,
    rounds: 0,
    isValid: null
  };

  createExercise = e => {
    e.preventDefault();
    this.setState({
      runMinutes: e.target[0].value,
      runSeconds: e.target[1].value,
      walkMinutes: e.target[2].value,
      walkSeconds: e.target[3].value,
      rounds: e.target[4].value,
      isValid: true
    });

    if (!e.target[4].value || e.target[0].value + e.target[1].value + e.target[2].value + e.target[3].value == 0) {
      this.setState({ isValid: false });
    }
  };

  render() {
    return (
      <Wrapper>
        <Header>
          <AppTitle />
        </Header>
        <WeeksWrapper>
          {settings.map(item => (
            <Link to={{
                pathname: "/exercise",
                state: {
                  run: item.run,
                  walk: item.walk,
                  rounds: item.rounds,
                  week: item.week
                }
              }}
              key={item.week}
            >
              <WeekButton week={item.week} />
            </Link>
          ))}
        </WeeksWrapper>
        <h3>or create your own exercise:</h3>
        <Form submitFn={this.createExercise} state={this.state} />

        {this.state.rounds != 0 && this.state.runMinutes + this.state.runSeconds + this.state.walkMinutes + this.state.walkSeconds != 0 && (
            <InfoWrapper>
              <ValidationInfo success>
                Alright! Everything is set! :)
              </ValidationInfo>
              <Link to={{
                  pathname: "/exercise",
                  state: {
                    run: this.state.runMinutes * 60 * 1000 + this.state.runSeconds * 1000,
                    walk: this.state.walkMinutes * 60 * 1000 + this.state.walkSeconds * 1000,
                    rounds: this.state.rounds,
                    week: 0
                  }
                }}
              >
                <Button htmlType="submit" submit>
                  Continue
                </Button>
              </Link>
            </InfoWrapper>
        )}
      </Wrapper>
    );
  }
}

export default Weeks;
