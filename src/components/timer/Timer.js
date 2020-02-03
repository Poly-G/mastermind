import React, { Component } from "react";
import TimerModal from "./TimerModal";

export default class Timer extends Component {
  state = {
    minutes: 2,
    seconds: 0
  };

  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;

      if (seconds > 0) {
        this.setState(({ seconds }) => ({
          seconds: seconds - 1
        }));
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ minutes }) => ({
            minutes: minutes - 1,
            seconds: 59
          }));
        }
      }
    }, 1000);
  }

  render() {
    const { minutes, seconds } = this.state;
    let { correct, allGuesses } = this.props;
    return (
      <div className="timer">
        {minutes === 0 &&
        seconds === 0 &&
        correct !== 4 &&
        allGuesses.length !== 10 ? (
          <TimerModal />
        ) : (
          <h2>
            Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </h2>
        )}
      </div>
    );
  }
}
