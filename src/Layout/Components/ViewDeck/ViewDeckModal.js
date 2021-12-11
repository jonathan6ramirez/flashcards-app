import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { deleteCard } from "../../../utils/api";

function ViewDeckModal({show, handleClose, cardId}) {
    const history = useHistory();
    const handleDelete = () => {
        deleteCard(cardId);
        handleClose();
        history.go(0)
    }
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
                <Button variant="primary" onClick={handleDelete}>Understood</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ViewDeckModal;