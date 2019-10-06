import React, { Component } from "react";
import Timer from "components/Timer/Timer";
import Header from "components/Header/Header";
import Wrapper from "components/Wrapper/Wrapper";
import styled from "styled-components";
import Button from "components/Button/Button";

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

class Exercise extends Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 10000
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Countdown ended");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      });
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);

    return (
      <Wrapper>
        <Header>
          <WeekTitle>Week 1</WeekTitle>
          <Subtitle>Time left: 30:00</Subtitle>
          <Timer minutes={minutes} seconds={seconds} />
        </Header>
        <div>
          {timerOn === false &&
            (timerStart === 0 || timerTime === timerStart) && (
              <Button onClick={this.startTimer}>Start</Button>
            )}
          {timerOn === true && timerTime >= 1000 && (
            <Button stop onClick={this.stopTimer}>Stop</Button>
          )}
          {timerOn === false &&
            (timerStart !== 0 &&
              timerStart !== timerTime &&
              timerTime !== 0) && (
              <Button onClick={this.startTimer}>Resume</Button>
            )}
          {(timerOn === false || timerTime < 1000) &&
            (timerStart !== timerTime && timerStart > 0) && (
              <Button onClick={this.resetTimer}>Reset</Button>
            )}
        </div>
      </Wrapper>
    );
  }
}

export default Exercise;
