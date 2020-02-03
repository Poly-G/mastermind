import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default function InitialDirections(props) {
  return (
    <div>
      <Modal isOpen={props.modal}>
        <ModalHeader>
          <h1>YOU'VE MADE IT THIS FAR</h1>
        </ModalHeader>
        <ModalBody>
          <p>
            You have successfully broken into the bank... now all you need to do
            is break into this vault
          </p>
          <p className="intro-steps">Here's what you'll need to know:</p>
          <ul className="steps">
            <li>
              You have <span className="direction-nums">10 </span>attempts and{" "}
              <span className="direction-nums">2 minutes</span> before the cops
              show up
            </li>
            <li>
              This is a <span className="direction-nums">4</span> number
              combination vault. If you try to input anything other than a
              number it will warn you.
            </li>
            <li>
              This vault provides feedback. If you get a number in the correct
              location it will let you know. If you get a correct number in the
              incorrect location, it will also let you know.
            </li>
          </ul>
          <p>
            Good luck, and try to be quick! I will be waiting for you outside.
          </p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={props.toggle} className="modal-button">
            BEGIN
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
