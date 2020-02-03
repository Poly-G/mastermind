import React, { Component } from "react";
import "./timer.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class TimerModal extends Component {
  state = {
    timerModal: true
  };

  restart = () => window.location.reload();

  render() {
    return (
      <div>
        <Modal isOpen={this.state.timerModal} className="timer-modal">
          <ModalHeader>
            <h1>TIME IS UP!!</h1>
          </ModalHeader>
          <ModalBody>
            <p>The cops have showed up and you ran out of time.</p>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.restart} className="modal-button">
              TRY AGAIN
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
