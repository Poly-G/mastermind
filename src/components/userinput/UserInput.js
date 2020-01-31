import React, { Component } from "react";
import "./userinput.css";
import { Button, Form } from "reactstrap";

export default class UserInput extends Component {
  state = {
    input: "",
    currentGuess: [],
    allGuesses: [],
    contains: 0,
    correct: 0,
    result: [],
    history: []
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { input, allGuesses } = this.state;

    this.setState(
      {
        currentGuess: input,
        allGuesses: [...allGuesses, input],
        input: ""
      },
      () => {
        this.guesser();
        this.historyFunc();
        this.gameOver();
      }
    );
  };

  guesser = () => {
    const { randomNumber } = this.props;
    let { currentGuess } = this.state;
    let correctCpy = [...randomNumber];
    let arr = [];
    let correctNum = 0;

    // positional correctness
    for (let i = 0; i < 4; i++) {
      let randomNum = randomNumber[i];

      if (randomNum === currentGuess[i]) {
        correctCpy[i] = -1;
        correctNum++;

        arr.push(randomNum);
      } else {
        arr.push("-");
      }

      this.setState({
        correct: correctNum,
        result: arr
      });
    }

    // if the number is correct, end game
    if (correctNum === 4) this.winner();

    // general correctness
    let num = 0;

    for (let i = 0; i < 4; i++) {
      if (correctCpy.includes(currentGuess[i])) {
        num++;
        correctCpy[correctCpy.indexOf(currentGuess[i])] = -1;
      }
    }

    this.setState({
      contains: num
    });

    num = 0;
  };

  gameOver = () => {
    let { allGuesses } = this.state;
    if (allGuesses.length === 10) {
      alert("game over");

      window.location.reload();
    }
  };

  winner = () => {
    alert("you won");

    window.location.reload();
  };

  displayFunc = () => {
    let { correct, contains, history, currentGuess } = this.state;
    let display;

    let correctNum = correct;
    let containsNum = contains;

    if (history.length === 0) {
      display = "";
    } else {
      display = (
        <div className="incorrect-guess">
          <h3>INCORRECT GUESS</h3>
          <p>{currentGuess}</p>
          <p>{correctNum} Number(s) is correct, and in the correct location</p>
          <p>{containsNum} Number(s) is correct, but in the wrong location</p>
        </div>
      );
    }

    return display;
  };

  historyFunc = () => {
    let arr = [];

    arr = this.displayFunc();
    this.setState({
      history: [...this.state.history, arr]
    });

    console.log(this.state.history);
  };

  render() {
    let { input, result, history, allGuesses } = this.state;

    return (
      <div className="userinput">
        <Form onSubmit={this.handleSubmit}>
          <label>
            Guess Number:
            <input
              type="text"
              value={input}
              onChange={this.handleChange}
              pattern="\d*"
              maxlength="4"
              placeholder="Input a number"
            />
          </label>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Form>
        <p>{result}</p>

        <p>You have {10 - allGuesses.length} attempts left</p>
        <h3>CURRENT GUESS</h3>

        {this.displayFunc()}

        {history.length >= 1 ? <h3>HISTORY</h3> : ""}
        {history}
      </div>
    );
  }
}
