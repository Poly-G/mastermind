import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    numbers: []
  };
  componentDidMount() {
    axios
      .get(
        "https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new"
      )
      .then(res => {
        this.setState({ numbers: res.data });
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="App">
        <p>{this.state.numbers}</p>
      </div>
    );
  }
}

export default App;
