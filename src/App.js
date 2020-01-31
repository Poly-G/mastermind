import React from "react";
import axios from "axios";
import "./App.css";

// import components
import UserInput from "./components/userinput/UserInput";

class App extends React.Component {
  state = {
    randomNumber: []
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

  render() {
    return (
      <div className="App">
        <p>{this.state.randomNumber}</p>
        <UserInput randomNumber={this.state.randomNumber} />
      </div>
    );
  }
}

export default App;
