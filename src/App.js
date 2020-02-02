import React from "react";
import axios from "axios";
import "./App.css";

// import components
import UserInput from "./components/userinput/UserInput";
import Timer from "./components/timer/Timer";
import InitialDirections from "./components/initialDirections/InitialDirections";

class App extends React.Component {
  state = {
    randomNumber: [],
    modal: true
  };

  componentDidMount() {
    axios
      .get(
        "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"
      )
      .then(res => {
        this.setState({ randomNumber: res.data.split("\n") });
      })
      .catch(error => console.log(error));
  }

  toggle = () => this.setState({ modal: !this.state.modal });

  render() {
    return (
      <div className="App">
        <InitialDirections modal={this.state.modal} toggle={this.toggle} />

        {this.state.modal ? "" : <Timer className="timer" />}

        <UserInput randomNumber={this.state.randomNumber} />

        <p>{this.state.randomNumber}</p>
      </div>
    );
  }
}

export default App;
