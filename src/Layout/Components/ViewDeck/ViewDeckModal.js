import React from "react";
import { Button, Modal } from "react-bootstrap";

function ViewDeckModal({show, handleClose, handleShow, cardId}) {
    return (
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard="false">
            <Modal.Header closeButton>
                <Modal.Title>Delete this card?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You will not be able to recover card #{cardId}.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary">Understood</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ViewDeckModal;