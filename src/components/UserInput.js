import React, { Component } from "react";
import { Button, Form } from "reactstrap";

export default class UserInput extends Component {
  state = {
    input: "",
    currentGuess: [],
    allGuesses: [],
    contains: 0,
    result: []
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    const { input, allGuesses } = this.state;
    e.preventDefault();
    this.setState(
      {
        currentGuess: input,
        allGuesses: [...allGuesses, input],
        input: ""
      },
      () => {
        this.guesser();
      }
    );
  };

  guesser = () => {
    const { randomNumber } = this.props;
    let { currentGuess } = this.state;
    let correctCpy = [...randomNumber];
    let arr = [];

    // positional correctness
    for (let i = 0; i < 4; i++) {
      let randomNum = randomNumber[i];

      if (randomNum === currentGuess[i]) {
        correctCpy[i] = -1;
        arr.push(randomNum);
      } else {
        arr.push("-");
      }

      this.setState({
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

  render() {
    return (
      <div>
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
        <p>
          In addition to the correct numbers displayed, you got an additional{" "}
          {this.state.contains} correct but in the wrong spot
        </p>
      </div>
    );
  }
}
