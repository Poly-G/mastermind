import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "../timer/loser.css";

export default function GameOverModal() {
  let restart = () => window.location.reload();
  return (
    <div>
      <Modal isOpen={true} className="loser-modal">
        <ModalHeader>
          <h1>RAN OUT OF GUESSES</h1>
        </ModalHeader>
        <ModalBody>
          <p>
            <p>The cops have showed up and you ran out of guesses</p>
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={restart} className="modal-button">
            TRY AGAIN
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
