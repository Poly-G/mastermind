import React from "react";
import axios from "axios";
import "./App.css";

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

// import components
import UserInput from "./components/userinput/UserInput";

class App extends React.Component {
  state = {
    randomNumber: [],
    modal: true
  };

  toggle = () => this.setState({ modal: !this.state.modal });

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
        <Modal isOpen={this.state.modal}>
          <ModalHeader>
            <h1>YOU'VE MADE IT THIS FAR</h1>
          </ModalHeader>
          <ModalBody>
            <p>
              You have successfully broken into the bank... now all you need to
              do is break into this vault
            </p>
            <p className="intro-steps">Here are a few things we know:</p>
            <ul className="steps">
              <li>You have 10 attempts before the cops show up</li>
              <li>
                This is a 4 number combination vault. If you try to input
                anything other than a number is will warn you
              </li>
              <li>
                This vault gives off feedback. If you get a number in the
                correct location it will let you know. If you get a correct
                number in the incorrect location, it will also let you know
              </li>
            </ul>
            <p>
              Good luck, and try to be quick! I will be waiting for you outside
            </p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.toggle} className="modal-button">
              BEGIN
            </Button>
          </ModalFooter>
        </Modal>

        <p>{this.state.randomNumber}</p>
        <UserInput randomNumber={this.state.randomNumber} />
      </div>
    );
  }
}

export default App;
