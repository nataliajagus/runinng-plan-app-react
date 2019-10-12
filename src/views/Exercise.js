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
    timerTime: 0,
    isRunning: true,
    isWalking: false,
    totalTime: 0,
    roundTime: 0,
    run: 0,
    walk: 0,
    rounds: 0,
    mode: "run",
    week: 1
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerStart: this.state.totalTime
    });

    const run = callback => {
      this.setState({ mode: "run", timerOn: true });

      if (this.state.isRunning) {
        this.runInterval = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            clearInterval(this.runInterval);
            this.setState({
              isRunning: false,
              isWalking: true,
              timerTime: this.state.walk
            });
            callback();
          }
        }, 10);
      }
    };

    const walk = () => {
      this.setState({ mode: "walk" });

      if (this.state.isWalking) {
        this.walkInterval = setInterval(() => {
          const newTime = this.state.timerTime - 10;
          if (newTime >= 0) {
            this.setState({
              timerTime: newTime
            });
          } else {
            clearInterval(this.walkInterval);
            this.setState({ timerOn: false });
            this.setState({ isRunning: true, isWalking: false });
            if (this.state.totalTime >= 0) {
              this.setState({ timerTime: this.state.run });
              run(walk);
            }
          }
        }, 10);
      }
    };

    this.totalTimer = setInterval(() => {
      const newTime = this.state.totalTime - 10;
      if (newTime >= 0) {
        this.setState({
          totalTime: newTime
        });
      } else {
        clearInterval(this.totalTimer);
        this.setState({ timerOn: false, timerTime: 0 });
      }
    }, 10);

    return this.state.isRunning ? run(walk) : walk();
  };

  stopTimer = () => {
    clearInterval(this.runInterval);
    clearInterval(this.walkInterval);
    clearInterval(this.totalTimer);
    this.setState({ timerOn: false });
  };

  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.run,
        totalTime: (this.state.run + this.state.walk) * this.state.rounds
      });
    }
  };

  componentDidMount() {
    const { run, walk, rounds, week } = this.props.location.state;

    this.setState({
      run: run,
      walk: walk,
      rounds: rounds,
      timerTime: run,
      totalTime: (run + walk) * rounds,
      week: week
    });
  }

  componentDidUpdate() {
    if (this.state.totalTime === 0) {
      clearInterval(this.runInterval);
      clearInterval(this.walkInterval);
    }
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  render() {
    const { timerTime, timerStart, timerOn, totalTime } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let minutesTotal = ("0" + Math.floor((totalTime / 60000) % 60)).slice(-2);
    let secondsTotal = ("0" + (Math.floor((totalTime / 1000) % 60) % 60)).slice(
      -2
    );

    return (
      <Wrapper>
        <Header>
          <WeekTitle>Week {this.state.week}</WeekTitle>
          <Subtitle>
            Time left: {minutesTotal}:{secondsTotal}
          </Subtitle>
          <Timer minutes={minutes} seconds={seconds} mode={this.state.mode} />
        </Header>
        <div>
          {timerOn === false &&
            (timerStart === 0 || timerTime === timerStart) && (
              <Button onClick={this.startTimer}>Start</Button>
            )}
          {timerOn === true && totalTime >= 1000 && (
            <Button stop onClick={this.stopTimer}>
              Stop
            </Button>
          )}
          {timerOn === false &&
            (timerStart !== 0 &&
              timerStart !== timerTime &&
              timerTime !== 0) && (
              <Button onClick={this.startTimer}>Resume</Button>
            )}
          {(timerOn === false || totalTime <= 0) &&
            (timerStart !== timerTime && timerStart > 0) && (
              <Button onClick={this.resetTimer}>Reset</Button>
            )}
        </div>
      </Wrapper>
    );
  }
}

export default Exercise;
