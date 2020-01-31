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
        this.modal();
        this.historyFunc();
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
      console.log(correctCpy, currentGuess[i]);
      console.log(correctCpy.indexOf(currentGuess[i]));
      if (correctCpy.includes(currentGuess[i])) {
        num++;
        correctCpy[correctCpy.indexOf(currentGuess[i])] = -1;
      }
    }

    console.log(correctCpy);

    this.setState({
      contains: num
    });

    num = 0;
  };

  modal = () => {
    let { allGuesses } = this.state;
    if (allGuesses.length === 10) {
      alert("game over");
    }
  };

  displayFunc = () => {
    let { correct, contains, currentGuess } = this.state;
    let display;

    if (currentGuess.length === 0) {
      display = "";
    } else {
      display = (
        <div>
          <h3>INCORRECT GUESS</h3>
          <p>{correct} Number(s) is correct, and in the correct location</p>
          <p>{contains} Number(s) is correct, but in the wrong location</p>
        </div>
      );
    }

    return display;
  };

  historyFunc = () => {
    this.setState({
      history: [...this.state.history, this.displayFunc()]
    });
  };

  render() {
    return (
      <div className="userinput">
        <Form onSubmit={this.handleSubmit}>
          <label>
            Guess Number:
            <input
              type="number"
              value={this.state.input}
              onChange={this.handleChange}
            />
          </label>
          <Button type="submit" value="Submit">
            Submit
          </Button>
        </Form>
        <p>{this.state.result}</p>
        {this.displayFunc()}
        <h3>History</h3>
        {this.state.history}
      </div>
    );
  }
}
