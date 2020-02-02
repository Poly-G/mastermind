import React, { Component } from "react";
import "./userinput.css";
import { Button, Form } from "reactstrap";
import GameOverModal from "./GameOverModal";
import WinnerModal from "./WinnerModal";

const DisplayFunc = props => {
  let { correct, contains, currentGuess, allGuesses } = props;

  let display;

  display = (
    <div className="incorrect-guess">
      <h3>INCORRECT GUESS</h3>
      <p>{currentGuess}</p>
      <p>{correct} Number(s) is correct, and in the correct location</p>
      <p>{contains} Number(s) is correct, but in the wrong location</p>
    </div>
  );

  return display;
};

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
    const { input, allGuesses, history } = this.state;

    this.setState(
      {
        currentGuess: input,
        allGuesses: [...allGuesses, input],
        input: ""
      },
      async () => {
        await this.guesser();
        await this.historyFunc();
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

    console.log("Guesser contains :", this.state.contains);
    console.log("Guesser correct :", this.state.correct);

    num = 0;
    correctNum = 0;
  };

  historyFunc = props => {
    let arr = [];
    arr = (
      <DisplayFunc
        contains={this.state.contains}
        correct={this.state.correct}
        currentGuess={this.state.currentGuess}
      />
    );

    console.log("historyFunc :", arr);

    this.setState({
      history: [...this.state.history, arr]
    });
  };

  render() {
    let { input, result, history, allGuesses, correct } = this.state;

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

        {history.length >= 1 ? (
          <DisplayFunc
            contains={this.state.contains}
            correct={this.state.correct}
            currentGuess={this.state.currentGuess}
          />
        ) : (
          ""
        )}

        {history.length >= 1 ? <h3>HISTORY</h3> : ""}
        {history}
        {allGuesses.length === 10 ? <GameOverModal /> : ""}
        {correct === 4 ? <WinnerModal /> : ""}
      </div>
    );
  }
}
