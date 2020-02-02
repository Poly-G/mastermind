import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function WinnerModal() {
  let restart = () => window.location.reload();
  return (
    <div>
      <Modal isOpen={true} className="winnerModal">
        <ModalHeader>
          <h1>YOU SUCCESSFULLY GUESSED THE COMBINATION</h1>
        </ModalHeader>
        <ModalBody>
          <p>Congratulations!</p>
          <p>The Vault has a total of $100,000,000 dollars</p>
          <iframe
            src="https://giphy.com/embed/Tex4wVhhs4iwKoV7YT"
            width="480"
            height="330"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
          ></iframe>
        </ModalBody>
        <ModalFooter>
          <Button onClick={restart} className="modal-button">
            PLAY AGAIN
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
