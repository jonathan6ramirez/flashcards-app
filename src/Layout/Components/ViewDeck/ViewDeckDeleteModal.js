import React from "react";
import { Modal, Button } from "react-bootstrap";

function DeckDelete ({ showDeckDelete, handleDeleteClose, deckId, handleDeckDeleteClick }) {
    return (
        <Modal
        show={ showDeckDelete }
        onHide={ handleDeleteClose }
        backdrop="static"
        keyboard="false">
            <Modal.Header closeButton>
                <Modal.Title>Delete this card?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                You will not be able to recover deck #{ deckId }.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={ handleDeleteClose }>Close</Button>
                <Button variant="primary" onClick={ handleDeckDeleteClick }>Understood</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeckDelete;