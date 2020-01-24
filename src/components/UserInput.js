import React, { Component } from "react";
import { Button, Form } from "reactstrap";

export default class UserInput extends Component {
  state = {
    input: "",
    currentGuess: [],
    allGuesses: []
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    const { input, allGuesses } = this.state;
    e.preventDefault();
    this.setState({
      currentGuess: input,
      allGuesses: [...allGuesses, input],
      input: ""
    });
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
        <p>{this.state.currentGuess}</p>
      </div>
    );
  }
}
